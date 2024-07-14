"use client"
import React, { Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from "react"

interface IUserContext {
    diagnosis:string,

    name:string,
    age:string,
    gender:string,
    setName:Dispatch<SetStateAction<string>>,
    setAge:Dispatch<SetStateAction<string>>,
    setGender:Dispatch<SetStateAction<string>>,
    setDiagnosis:Dispatch<SetStateAction<string>>,
    features: { [key: string]: number },
    setFeatures:Dispatch<SetStateAction< { [key: string]: number }>>,
}

interface IUserProvider {
  children: React.ReactNode
}

const Context = React.createContext<IUserContext>({} as IUserContext)


const UserProvider = ({ children }: IUserProvider) => {

    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [diagnosis, setDiagnosis] = useState<string>("");
    const [features, setFeatures] = useState<{ [key: string]: number }>({});
  return (
    <Context.Provider
      value={{name,setName,age,setAge,diagnosis, setDiagnosis, gender, setGender, features, setFeatures}}
    >
      {children}
    </Context.Provider>
  )
}

const useUserContext = () => {
  const c = React.useContext(Context)

  if (c === undefined) {
    throw new Error("useUserContext must be used within a UserProvider")
  }

  return c
}

export { UserProvider, useUserContext }

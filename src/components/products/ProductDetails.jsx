import { useEffect, useContext } from "react";
import { useState } from "react/cjs/react.development";
import { myFetch } from "../../helpers/fetch";
import { AuthContext } from "../login/AuthProvider";
import './Products.scss'

const ProductDetails = () => {
    const { houseDetails } = useContext(AuthContext)

    useEffect(() => {
        console.log(houseDetails)
    }, [])

    return (
        <>
            Product details
        </>
    )

}

export { ProductDetails };
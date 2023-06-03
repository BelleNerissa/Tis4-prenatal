import React from "react";

export default function InputField(props) {

    const defArticle = (props) => {
        return props.transparent == 'cpf' ? 'sua' : 'seu'
    }
    return (
        <>
            <div className="relative w-full mb-3">
                <label
                    className="block text-brown-900 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    {props.label}
                </label>
                <input
                type={props.type === 'confirm_password'? 'password' :  props.type}
                className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                placeholder={props.type !== 'confirm_password' ? "Digite " + defArticle(props.label) + ' ' + props.label : 'Confirme sua senha'}
                style={{ transition: "all .15s ease" }}
                />
            </div>
        </>
    )
}
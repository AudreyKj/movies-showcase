import React from "react";
import "./styles.scss";

export const Loader = ({active = true}) => {

    return (
        <div
            className={['spinner', active && 'spinner--active'].join(' ')}
            role="progressbar"
            aria-busy={active ? 'true' : 'false'}
        />
    )
}
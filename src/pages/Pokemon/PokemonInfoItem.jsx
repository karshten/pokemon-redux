import React from 'react'

export const PokemonInfoItem = ({ info }) => {
    return (
        info && <div className="pokemon__accurate-info">
            <h2>{info?.title}</h2>
            {info?.articles?.map(item => (
                <>
                    {item.name && <h3>
                        {item.name}
                    </h3>}
                    <p>{item.description}</p>
                </>
            ))}
        </div>
    )
}

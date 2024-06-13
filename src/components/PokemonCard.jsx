

function PokemonCard({ pokemon }) {

    return (
        <figure>
            <figcaption>{pokemon.name}</figcaption>
            <p>{pokemon.attack}</p>
            {
                pokemon.imgSrc ?
                    <img src={pokemon.imgSrc} alt={pokemon.name} /> :
                    <p>Oups il n&apos;y a pas d&apos;image.</p>
            }
        </figure>
    );
}

export default PokemonCard;
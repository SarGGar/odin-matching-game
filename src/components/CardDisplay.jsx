import './CardDisplay.css'
import { fetchPokemonImgUrlFromUrl } from "../pokemonAPI";

function CardDisplay({imgUrls, cardIndices, selectionFunction}) {


    return (
        <>
        {imgUrls.map(function(img, i) {
            return (
                <button className="card" key={i} onClick={() => selectionFunction(cardIndices[i])}>
                    <img src={img} alt="game card"/>
                </button>
            )
        })}
        </>
    )
}


export default CardDisplay;
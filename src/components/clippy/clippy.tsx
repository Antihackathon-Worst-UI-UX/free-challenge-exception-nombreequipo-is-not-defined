import transparent_clippy from '/transparent_clippy.png';
import './clippy.css';
export default function Clippy(){
    return (
        <div className="clippy-container">
            <img className="clippy-image" alt="Hola, soy clippy!" src={transparent_clippy}/>
        </div>
    )
}
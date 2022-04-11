import './brand.css';
import telecine from '../../assets/telecine.png';
import hbo from '../../assets/hbo.png';
import fox from '../../assets/fox.png';
import amc from '../../assets/amc.png';
import cn from '../../assets/cn.png';

const Brand = () => {
    return (
        <div className='gpt3__brand' >
            <div>
                <img src={telecine} />
            </div>

            <div>
                <img src={hbo} />
            </div>

            <div>
                <img src={fox} />
            </div>

            <div>
                <img src={amc} />
            </div>

            <div>
                <img src={cn} />
            </div>
        </div>
    )
}

export default Brand

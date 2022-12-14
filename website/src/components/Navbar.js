import React from 'react'

const Navbar = () => {
    const [state,setState] = React.useState(false);
    React.useEffect(()=> {
        window.addEventListener("scroll", handleScroll);
    }, [])
    const handleScroll = () => {
        if (window.scrollY > 120){
            setState(true);
        }else {
            setState(false);
        }
    }
    return (
        <div className={`navbar ${state ? 'whiteBg' : 'transparent'} `}>
            <div className="container">
                <div className="navbar__content">
                    <div className="navbar__left"><img src={state ? './images/1.png' : './images/1.png'} alt="logo"></img></div>
                    <ul className="navbar__right">
                        <li>
                            <a href="">Anasayfa</a>
                        </li>
                        <li>
                            <a href="">Çalışmalarımız</a>
                        </li>
                        <li>
                            <a href="">Portfolyo</a>
                        </li>
                        <li>
                            <a href="">Hakkımızda</a>
                        </li>
                        <li>
                            <a href="">İletişim</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar

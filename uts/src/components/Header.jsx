import gambaar from "../Rajasu.jpg"

const Logo = {
    nama: "",
    imageUrl: "",
    imageSize: 120,
};

function Header() {
    return(
        <div className="header">
            <div className="header-logo">
                <img 
                className="App-logo"
                src={gambaar}
                alt={"logo" + Logo.nama}
                style={{width: Logo.imageSize, height: Logo.imageSize}}
                />
                <h3>{Logo.nama}</h3>
            </div>
            <div>
                <h1>KEDAI MINUMAN BOBA RAJASU</h1>
                <h2>Rajanya susu</h2>
            </div>
        </div>
    );
}

export default Header;

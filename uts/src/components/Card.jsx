import fm1Image from '../bg2.jpg';
import fm2Image from '../mg.jpg';
import fm3Image from '../bs.jpg';

const Card = ({ title, description, imageUrl }) => {
    return (
    <div id='facilities' className="card">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    </div>
);
};
const CardList = () => {
const concert = [
    {
    title: 'BUBLE GUM',
    description: 'Rasakan keceriaan dalam setiap tegukan dengan Bubble Gum Boba kami! Minuman ini menggabungkan rasa manis dan ceria dari permen karet yang ikonik, memberikan pengalaman yang menyenangkan bagi semua pecinta boba. Dihidangkan dengan bola tapioka kenyal yang menyerap rasa manis, Bubble Gum Boba adalah pilihan sempurna untuk Anda yang ingin merasakan nostalgia masa kecil. Dengan tambahan susu segar yang lembut, minuman ini tidak hanya menggugah selera, tetapi juga memberikan sensasi kenyal yang menyenangkan. Cocok untuk semua usia, Bubble Gum Boba adalah pilihan yang tidak boleh Anda lewatkan!',
    imageUrl: fm1Image,
},
{
    title: 'MANGGA ',
    description: 'Segarkan hari Anda dengan Serbuk Mangga Boba yang menyegarkan! Minuman ini terbuat dari serbuk mangga berkualitas tinggi yang memberikan rasa manis dan asam yang seimbang, menciptakan sensasi tropis yang menggoda. Dihidangkan dengan bola tapioka kenyal yang menambah tekstur, Serbuk Mangga Boba adalah pilihan ideal untuk Anda yang mencari kesegaran di setiap tegukan. Dengan tambahan susu atau yogurt, minuman ini menjadi lebih creamy dan lezat, sempurna untuk dinikmati di hari yang panas. Serbuk Mangga Boba akan membawa Anda merasakan keindahan buah tropis dalam setiap gelasnya!',
    imageUrl: fm2Image,
},
{
    title: 'BOBA BROWNSUGAR',
    description: ' Nikmati kelezatan yang kaya dan otentik dari Brown Sugar Boba kami! Minuman ini terbuat dari campuran teh hitam yang diseduh dengan sempurna, dipadukan dengan sirup gula merah yang kental dan manis. Bola tapioka kenyal menyerap rasa manis dari gula merah, menciptakan harmoni rasa yang memanjakan lidah. Dihidangkan dengan susu segar yang creamy, Brown Sugar Boba adalah pilihan ideal bagi Anda yang menyukai rasa manis yang dalam dan memuaskan. Setiap tegukan adalah pengalaman yang menggugah selera, menjadikan minuman ini favorit di Kedai Boba Rajasu!',
    imageUrl: fm3Image,
},
];

return (
<div id='concert' className="card-container">
    <h2 className="section-title">PRODUK</h2>
    <div className="card-grid">
        {concert.map((con, index) => (
            <Card
            key={index}
            title={con.title}
            description={con.description}
            imageUrl={con.imageUrl}
            />
            ))}
    </div>
</div>
);
};
export default CardList;
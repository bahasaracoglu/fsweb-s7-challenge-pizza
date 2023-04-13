import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./css/Prefrences.css";
import * as yup from "yup";

export default function Prefrences() {
  const data = {
    name: "Position Absolute Acı Pizza",
    price: 85.5,
    rate: 4.9,
    comment: 200,
    content: {
      explanation: `Lezzetli ve taze malzemelerle hazırlanmış pizza seçenekleriyle kendinizi
      İtalyan mutfağının eşsiz lezzetlerine doğru bir yolculuğa çıkarın. İnce
      hamuru, yoğun sosu ve zengin peynirleriyle hazırlanan pizzalarımız
      arasından seçim yaparken kendinizi kaybedeceksiniz. Çeşitli sebzeler,
      etler ve deniz ürünleriyle zenginleştirilen menümüzde her zevke hitap
      edecek bir seçenek bulabilirsiniz. Sıcak ve lezzetli pizzalarımızı
      dilimlerken, keyifli bir yemek deneyimi yaşayacaksınız.`,
      size: ["Küçük", "Orta", "Büyük"],
      additional: [
        "Peperoni",
        "Sosis",
        "Kanada Jambonu",
        "Tavuk Izgara",
        "Soğan",
        "Domates",
        "Mısır",
        "Sucuk,",
        "Jalepeno",
        "Sarımsak",
        "Biber",

        "Ananas",
        "Kabak",
      ],

      dough: ["İnce Hamur", "Normal Hamur", "Kalın Hamur"],
    },
  };

  const emtyData = {
    Peperoni: false,
    Sosis: false,
    "Kanada Jambonu": false,
    "Tavuk Izgara": false,
    Soğan: false,
    Domates: false,
    Mısır: false,
    Sucuk: false,
    Jalepeno: false,
    Sarımsak: false,
    Biber: false,

    Ananas: false,
    Kabak: false,

    SiparisAdeti: 1,
    Fiyat: 0,
    Boyut: "",
    "Hamur Kalınlığı": "",

    "Sipariş Notu": "",
  };

  const [formData, setFormData] = useState(emtyData);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    const updatedInfo = type === `checkbox` ? checked : value;
    setFormData({ ...formData, [name]: updatedInfo });
    //console.log(event);
  };
  console.log("formData", formData);

  const additionalPrice =
    Object.values(formData).filter((value) => value === true).length * 5;

  const totalPrice = (data.price + additionalPrice) * formData.SiparisAdeti;

  useEffect(() => {
    setFormData((prevState) => ({ ...prevState, Fiyat: totalPrice }));
  }, [totalPrice]);

  const changeOrderNum = (event) => {
    event.preventDefault();
    console.log(event);
    const { name, id } = event.target;
    let orderNum = formData.SiparisAdeti;
    if (id === "-") {
      orderNum > 1 && setFormData({ [name]: orderNum - 1 });
    } else if (id === "+") {
      setFormData({ ...formData, [name]: orderNum + 1 });
    }
  };

  const history = useHistory();
  const handleSubmit = () => {
    axios
      .post("https://reqres.in/api/orders", formData)
      .then(function (response) {
        // handle success
        console.log("Sipariş Özeti:", response.data);
        !response && history.push("/success");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

    history.push("/success");
  };

  return (
    <div className="form">
      <form id="pizza-form" onSubmit={handleSubmit}>
        <div className="boyut-hamur-container">
          <div className="boyut">
            <h4>Boyut Seç*</h4>
            {data.content.size.map((size, i) => {
              return (
                <label key={i}>
                  <input
                    checked={formData.Boyut === size}
                    onChange={handleChange}
                    name="Boyut"
                    type="radio"
                    value={size}
                  />
                  {size}
                </label>
              );
            })}
          </div>
          <div className="hamur">
            <h4>Hamur Seç*</h4>
            <label>
              <select
                id="size-dropdown"
                value={formData.name}
                name="Hamur Kalınlığı"
                onChange={handleChange}
              >
                <option value="">Hamur Kalınlığı</option>
                {data.content.dough.map((dough, i) => {
                  return (
                    <option
                      key={i}
                      onChange={handleChange}
                      name="hamur"
                      value={dough}
                      type="dropdown"
                    >
                      {dough}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
        </div>
        <div className="malzemeler">
          <h4>Ek Malzemeler</h4>
          <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div className="malzemeler-container">
            {data.content.additional.map((malzeme, i) => {
              return (
                <label key={i}>
                  <input
                    onChange={handleChange}
                    name={malzeme}
                    type="checkbox"
                    value={formData.value}
                  />
                  {malzeme}
                </label>
              );
            })}
          </div>
        </div>

        <div className="siparis-notu">
          <h4>Sipariş Notu</h4>
          <label>
            <input
              className="siparis-notu-input"
              id="special-text"
              onChange={handleChange}
              name="Sipariş Notu"
              type="text"
              value={formData.name}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
            />
          </label>
        </div>

        <div className="toplam">
          <div className="siparis-adeti">
            <button
              className="azalt-butonu"
              name="siparisAdeti"
              value={formData.SiparisAdeti}
              onClick={changeOrderNum}
              id="-"
            >
              -
            </button>
            <h5> {formData.SiparisAdeti}</h5>
            <button
              className="artir-butonu"
              name="SiparisAdeti"
              value={formData.SiparisAdeti}
              onClick={changeOrderNum}
              id="+"
            >
              +
            </button>
          </div>

          <div className="siparis-toplami">
            <div className="siparis-toplam-info">
              <h4>Sipariş Toplamı</h4>
              <div className="secimler-fiyat">
                <h5> Seçimler</h5>
                <span>{additionalPrice}₺</span>
              </div>
              <div className="toplam-fiyat">
                <h5> Toplam</h5>
                <span>{totalPrice}₺</span>
              </div>
            </div>
            <button id="order-button">SİPARİŞ VER</button>
          </div>
        </div>
      </form>
    </div>
  );
}

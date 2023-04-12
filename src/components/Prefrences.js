import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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
        "Sucuk",
        "Ananas",
        "Kabak",
      ],

      dough: ["İnce Hamur", "Normal Hamur", "Kalın Hamur"],
    },
  };

  const emtyData = {
    //siparisnotu: "Siparişine eklemek istediğin bir not var mı?",
    siparisAdeti: 1,
    fiyat: 0,
  };
  const [formData, setFormData] = useState(emtyData);
  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    const updatedInfo = type === `checkbox` ? checked : value;
    setFormData({ ...formData, [name]: updatedInfo });
    console.log(event);
  };
  console.log(formData);

  const additionalPrice =
    Object.values(formData).filter((value) => value === true).length * 5;

  const totalPrice = (data.price + additionalPrice) * formData.siparisAdeti;

  useEffect(() => {
    setFormData((prevState) => ({ ...prevState, fiyat: totalPrice }));
  }, [totalPrice]);

  const changeOrderNum = (event) => {
    event.preventDefault();
    console.log(event);
    const { name, id } = event.target;
    let orderNum = formData.siparisAdeti;
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
        console.log(response.data);
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
    <>
      <form id="pizza-form" onSubmit={handleSubmit}>
        <div className="boyut">
          <h4>Boyut Seç*</h4>
          {data.content.size.map((size, i) => {
            return (
              <label key={i}>
                <input
                  checked={formData.boyut === size}
                  onChange={handleChange}
                  name="boyut"
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
        <div className="malzemeler">
          <h4>Ek Malzemeler</h4>
          <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          {data.content.additional.map((malzeme, i) => {
            return (
              <label key={i}>
                <input
                  onChange={handleChange}
                  name={malzeme}
                  type="checkbox"
                  value={formData.value}
                  /*checked={form.isGoing}
            onChange={handleChange}*/
                />
                {malzeme}
              </label>
            );
          })}
        </div>

        <div className="siparisNotu">
          <h4>Sipariş Notu</h4>
          <label>
            <input
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
          <div>
            <button
              name="siparisAdeti"
              value={formData.siparisAdeti}
              onClick={changeOrderNum}
              id="-"
            >
              -
            </button>
            {formData.siparisAdeti}
            <button
              name="siparisAdeti"
              value={formData.siparisAdeti}
              onClick={changeOrderNum}
              id="+"
            >
              +
            </button>
          </div>

          <div>
            <div>
              <h4>Sipariş Toplamı</h4>
              <div>
                Seçimler
                <span>{additionalPrice}₺</span>
              </div>
              <div>
                Toplam<span>{totalPrice}₺</span>
              </div>
            </div>
            <button id="order-button">SİPARİŞ VER</button>
          </div>
        </div>
      </form>
    </>
  );
}

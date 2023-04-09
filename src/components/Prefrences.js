import { useState } from "react";

export default function Prefrences() {
  const malzemeler = [
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
  ];

  return (
    <>
      <div className="boyut">
        <h4>Boyut Seç*</h4>
        <label>
          <input name="ageRange" type="radio" value="a" />
          Küçük
        </label>
        <label>
          <input name="ageRange" type="radio" value="b" />
          Orta
        </label>
        <label>
          <input name="ageRange" type="radio" value="c" />
          Büyük
        </label>
      </div>
      <div className="hamur">
        <h4>Hamur Seç*</h4>
        <label>
          <select
            /*value={form.state}*/ name="Hamur Kalınlığı" /*onChange={handleChange}*/
          >
            <option value="">Hamur Kalınlığı</option>
            <option value="AL">İnce Hamur</option>
            <option value="AK">Orta Hamur</option>
            <option value="AZ">Kalın Hamur</option>
          </select>
        </label>
      </div>
      <div className="malzemeler">
        <h4>Ek Malzemeler</h4>
        <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        {malzemeler.map((malzeme) => {
          return (
            <label>
              <input
                name="isGoing"
                type="checkbox"
                value="Pepperoni"
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
            name="siparisnotu"
            type="text"
            value="Siparişine eklemek istediğin bir not var mı?"
          />
        </label>
      </div>

      <div className="toplam">
        <div>
          <button>-</button>0<button>+ </button>
        </div>

        <div>
          <div>
            <h4>Sipariş Toplamı</h4>
            <div>
              Seçimler<span>25.00t</span>
            </div>
            <div>
              Toplam<span>110.5t</span>{" "}
            </div>
          </div>
          <button>SİPARİŞ VER</button>
        </div>
      </div>
    </>
  );
}

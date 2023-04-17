import { useState } from "react";
import HeaderBody from "../../element/HeaderBody";
import HeaderTitle from "../../element/HeaderTitle";
import Button from "../Button/Button";
import logo from '/src/assets/images/bootstrap-logo.png';

const Header = () => {
    const article = {
        title: {
          id: "Buat Akun",
          en: "Create Account"
        },
        description: {
          id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
          en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
        }
    };

    const [title, setTitle] = useState(article.title.en)
    const [desc, setDesc] = useState(article.description.en)

    const changeLanguage = () => {
        setTitle(title === article.title.en ? article.title.id : article.title.en);
        setDesc(desc === article.description.en ? article.description.id : article.description.en);
    }

    return (
        <div className="container text-center mt-5">
                    <img
                        className=" img img-fluid mx-auto d-block"
                        src={logo}
                        alt="Logo"
                    />
            <div className="container mt-3">
                    <HeaderTitle 
                        label={title}
                    />
                    <HeaderBody 
                        label={desc}
                    />
            </div>
                    <Button 
                        className="btn btn-primary"
                        label="Ganti Bahasa"
                        onClick={() => changeLanguage()}
                    />
        </div>

    );

};


export default Header
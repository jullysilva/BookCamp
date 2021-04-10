import React from 'react';
import './home.css';
import  ResponseToken  from "../../services/Login";
import { useDispatch } from "react-redux";
import { tokenLogin } from "../../storage/actions";

const Home = ({ history }) => {
    const dispatch = useDispatch();

    const RequestToken = async (e) => {
        e.preventDefault();
        const response = await ResponseToken("desafio@ioasys.com.br", "12341234");
        dispatch(tokenLogin(response.hearders.authorization));

        console.log(response);
        
        history.push('Book');
    }

    return(
        <form onSubmit={RequestToken}>
            <input type="text" name="email" placeholder="Seu email" required />
            <input type="password" name="password" placeholder="Sua senha" required />
            <button type="submit">Login</button>
        </form>
    );
}

export default Home;

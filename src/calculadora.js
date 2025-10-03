import { useState } from "react";
import Button from "./Boton";

const Calculadora = () => {
  const [input, setInput] = useState("");

  const borrar = () => {
    setInput("");
  };

  const dividir = () => {
    setInput((anterior) => anterior + "/");
  };

  const multiplicar = () => {
    setInput((anterior) => anterior + "*");
  };

  const restar = () => {
    setInput((anterior) => anterior + "-");
  };

  const sumar = () => {
    setInput((anterior) => anterior + "+");
  };

  const punto = () => {
    setInput((anterior) => anterior + ".");
  };

  const cero = () => {
    setInput((anterior) => anterior + "0");
  };

  const uno = () => {
    setInput((anterior) => anterior + "1");
  };

  const dos = () => {
    setInput((anterior) => anterior + "2");
  };

  const tres = () => {
    setInput((anterior) => anterior + "3");
  };

  const cuatro = () => {
    setInput((anterior) => anterior + "4");
  };

  const cinco = () => {
    setInput((anterior) => anterior + "5");
  };

  const seis = () => {
    setInput((anterior) => anterior + "6");
  };

  const siete = () => {
    setInput((anterior) => anterior + "7");
  };

  const ocho = () => {
    setInput((anterior) => anterior + "8");
  };

  const nueve = () => {
    setInput((anterior) => anterior + "9");
  };

  const calcular = () => {
    setInput(eval(input));
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="botones">
        <Button onClick={borrar} className="Boton">
          C
        </Button>
        <Button onClick={dividir} className="Btndivision">
          /
        </Button>
        <Button onClick={multiplicar} className="Btnmultiplicar">
          *
        </Button>
        <Button onClick={restar} className="Btnrestar">
          -
        </Button>
        <Button onClick={uno} className="Btnnumeros">
          1
        </Button>
        <Button onClick={dos} className="Btnnumeros">
          2
        </Button>
        <Button onClick={tres} className="Btnnumeros">
          3
        </Button>
        <Button onClick={cuatro} className="Btnnumeros">
          4
        </Button>
        <Button onClick={cinco} className="Btnnumeros">
          5
        </Button>
        <Button onClick={seis} className="Btnnumeros">
          6
        </Button>
        <Button onClick={siete} className="Btnnumeros">
          7
        </Button>
        <Button onClick={ocho} className="Btnnumeros">
          8
        </Button>
        <Button onClick={nueve} className="Btnnumeros">
          9
        </Button>

        <Button onClick={cero} className="Btnnumeros">
          0
        </Button>
        <Button onClick={punto} className="Btnpunto">
          .
        </Button>
        <Button onClick={sumar} className="Btnsuma">
          +
        </Button>
        <Button onClick={calcular} className="Btnigual">
          =
        </Button>
      </div>
    </div>
  );
};

export default Calculadora;

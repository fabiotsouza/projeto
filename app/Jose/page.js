'use client'
import "../components/Menu.js"
import Menu from "../components/Menu";
import { useState, useEffect } from "react";
import "./projeto1.css";
import host from "../lib/host.js";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


function Pagina_jose() {

  const [all, setAll] = useState([])

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  const [edit, setEdit] = useState(0)

  const error = () => toast.error("Preencha o nome e preço...");

  async function searchCuts() {
    const response = await axios.get(host + "cortes")
    console.log(response.data)
    setAll(response.data)

  }
  async function insertCut() {
    const obj = {
      name: name,
      price: price,
      image: image
    }
    const response = await axios.post(host + "cortes", obj)
    console.log(response)
    searchCuts()
    setName("")
    setPrice("")
    setImage("")
  }

  async function updateCut() {
    const obj = {
      name: name,
      price: price,
      image: image
    }
    const response = await axios.put(host + "cortes/" + edit, obj)
    console.log(response)
    setEdit(0)
    searchCuts()
    setName("")
    setPrice("")
    setImage("")
  }
  function createEdit(corte) {
    setEdit(corte.id)
    setName(corte.nome)
    setPrice(corte.preco)
    setImage(corte.imagem)
  }
  async function deleteCut(id) {
    await axios.delete(host + "cortes/" + id)
    searchCuts()
  }
  function cancel() {
    setEdit(0)
    setName("")
    setPrice("")
    setImage("")

  }

  function sendForm(e) {
    e.preventDefault()

    if (edit == 0) {
      insertCut()
    } else {
      updateCut()
    }

  }
  useEffect(() => {
    searchCuts()
  }, [])

  return (

    <div>

      <Menu />

      <div className="container">
        <div className="formulario">
          <br />

          {
            edit == 0 ?
              <h2>Adicionar novos cortes:</h2>
              :
              <h2>Edição:</h2>

          }



          <div className="final">
            <form onSubmit={(e) => sendForm(e)}>

              <p>
                Nome:
              </p>
              <input required onChange={(e) => setName(e.target.value)} value={name} />
              <p>
                Preço:
              </p>
              <input required onChange={(e) => setPrice(e.target.value)} value={price} />
              <p>
                Imagem:
              </p>
              <input onChange={(e) => setImage(e.target.value)} value={image} />
              <br />
              {
                edit == 0 ?
                  <button >Adicionar corte</button>
                  :
                  <button>Editar</button>

              }
              <ToastContainer />
            </form>

            {
              edit != 0 &&

              <button onClick={() => cancel()}>Cancelar</button>

            }
          </div>
        </div>
        <div className="tabela">
          {
            all.length > 0 ?
              <table>
                <tr>

                  <td>Nome</td>
                  <td>Preço</td>
                  <td>Imagem</td>
                  <td>Opções</td>

                </tr>
                {
                  all.map(i =>
                    <tr className="tabela2">
                      <td>{i.nome}</td>
                      <td>R$ {i.preco.toFixed(2)}</td>
                      <td><img src={i.imagem} /></td>

                      <td className="botoes">
                        <button onClick={() => createEdit(i)}>Editar</button>
                        <br />
                        <button onClick={() => deleteCut(i.id)} >Remover</button>
                      </td>
                    </tr>
                  )
                }
              </table>
              :
              <p>Carregando...</p>
          }

        </div>
      </div>


      <script src="font-awesome-v6.6.js"></script>
    </div>
  );
}

export default Pagina_jose;
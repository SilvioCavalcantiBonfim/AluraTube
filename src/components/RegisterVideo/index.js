import React from "react";
import { StyledRegisterVideo } from "./style";

export default class RegisterVideo extends React.Component {
    state = {
        formVisivel: false,
        values: {
            title: "",
            url: "",
            thumbID: null
        }
    }
    HandleForm = (e) => {
        this.setState(v => {
            return { ...v, values: { ...v.values, [e.target.name]: e.target.value } }
        });
    }
    componentDidUpdate() {
        try {
            let url = new URL(this.state.values.url);
            const currentThumbID = url.searchParams.get("v");
            if (this.state.values.thumbID !== currentThumbID)
                this.setState(v => {
                    return { ...v, values: { ...v.values, thumbID: currentThumbID } }
                })
        } catch (error) {}
    }
    handleErrorImage = () => {
        console.log("erro na imagem")
    }
    render() {
        return (<StyledRegisterVideo>
            <button className="add-video" onClick={(event) => this.setState({ formVisivel: true })}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                </svg>
            </button>
            {this.state.formVisivel && (<form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <button className="close-modal" type="button" onClick={(event) => this.setState({ formVisivel: false })}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z" />
                        </svg>
                    </button>
                    <div className="mini-thumb-conteiner"><img className="mini-thumb" src={`https://img.youtube.com/vi/${this.state.values.thumbID}/hqdefault.jpg`} onError={() => this.handleErrorImage()} /></div>
                    <input placeholder="Titulo do vídeo" name="title" value={this.state.values.title || ""} onChange={this.HandleForm} />
                    <input placeholder="URL" name="url" value={this.state.values.url || ""} onChange={this.HandleForm} />
                    <button type="submit">Cadastrar</button>
                </div>
            </form>)}
        </StyledRegisterVideo>);
    }
}
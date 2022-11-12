import React from "react";
import { StyledRegisterVideo } from "./style";
import { createClient } from '@supabase/supabase-js'

const RegisterVideo = (props) => {
    const SupaBase = createClient(process.env.NEXT_PUBLIC_PROJECT_URL, process.env.NEXT_PUBLIC_API_KEY);

    const [values, setValues] = React.useState({ title: "", url: "", thumbID: null, playlist: "" });
    const [formVisivel, setFormVisivel] = React.useState(false);
    const [playlists, setPlaylists] = React.useState([]);


    React.useEffect(() => {
        try {
            let url = new URL(values.url);
            const currentThumbID = url.searchParams.get("v");
            if (values.thumbID !== currentThumbID)
                setValues(v => {
                    return {...v, thumbID: currentThumbID } 
                })
        } catch (error) { }
        SupaBase.from("playlists").select("*").then(data => {
            setPlaylists(data.data.map((e) => e.playlist));
        });
    }, [values]);

    const HandleForm = (e) => {
        setValues(v => {
            return { ...v, [e.target.name]: e.target.value }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        playlists.indexOf(values.playlist);
        if (playlists.indexOf(values.playlist) === -1)
            SupaBase.from("playlists").insert({
                playlist: values.playlist
            }).then(() => { }).catch(console.error)

        SupaBase.from("videos").insert({
            title: values.title,
            url: values.url,
            thumb: `https://img.youtube.com/vi/${values.thumbID}/hqdefault.jpg`,
            playlist: (playlists.indexOf(values.playlist) === -1) ? playlists.length + 1 : playlists.indexOf(values.playlist) + 1
        }).then(() => { }).catch(console.error)
        setFormVisivel(false);
        setValues({ title: "", url: "", thumbID: null, playlist: "" });
    }

    return (<StyledRegisterVideo>
        <button className="add-video" onClick={() => setFormVisivel(true)}>
            <IconAddVideo />
        </button>
        {formVisivel && (<form onSubmit={handleSubmit}>
            <div>
                <button className="close-modal" type="button" onClick={() => setFormVisivel(false)}>
                    <IconCloseModal />
                </button>
                <div className="mini-thumb-conteiner"><img className="mini-thumb" src={`https://img.youtube.com/vi/${values.thumbID}/hqdefault.jpg`}/></div>
                <input placeholder="Playlist" autoComplete="off" list="playlists" value={values.playlist || ""} name="playlist" onChange={HandleForm} />
                <datalist id="playlists">
                    {playlists.map((e, i) => <option key={i} value={e} />)}
                </datalist>
                <input placeholder="Titulo do vídeo" name="title" value={values.title || ""} onChange={HandleForm} />
                <input placeholder="URL" name="url" value={values.url || ""} onChange={HandleForm} />
                <button type="submit">Cadastrar</button>
            </div>
        </form>)}
    </StyledRegisterVideo>);
}

export default RegisterVideo;

export class RegisterVideo1 extends React.Component {

    SupaBase = createClient(process.env.NEXT_PUBLIC_PROJECT_URL, process.env.NEXT_PUBLIC_API_KEY);

    state = {
        formVisivel: false,
        playlists: [],
        values: {
            title: "",
            url: "",
            thumbID: null,
            playlist: ""
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
        } catch (error) { }
        this.SupaBase.from("playlists").select("*").then(data => {
            this.setState({ playlists: data.data.map((e) => e.playlist) });
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.state.playlists.indexOf(this.state.values.playlist);
        if (this.state.playlists.indexOf(this.state.values.playlist) === -1)
            this.SupaBase.from("playlists").insert({
                playlist: this.state.values.playlist
            }).then(() => { }).catch(console.error)

        this.SupaBase.from("videos").insert({
            title: this.state.values.title,
            url: this.state.values.url,
            thumb: `https://img.youtube.com/vi/${this.state.values.thumbID}/hqdefault.jpg`,
            playlist: (this.state.playlists.indexOf(this.state.values.playlist) === -1) ? this.state.playlists.length + 1 : this.state.playlists.indexOf(this.state.values.playlist) + 1
        }).then(() => { }).catch(console.error)
        this.setState({ formVisivel: false });
    }

    render() {

        return (<StyledRegisterVideo>
            <button className="add-video" onClick={(event) => this.setState({ formVisivel: true })}>
                <IconAddVideo />
            </button>
            {this.state.formVisivel && (<form onSubmit={this.handleSubmit}

            >
                <div>
                    <button className="close-modal" type="button" onClick={(event) => this.setState({ formVisivel: false })}>
                        <IconCloseModal />
                    </button>
                    <div className="mini-thumb-conteiner"><img className="mini-thumb" src={`https://img.youtube.com/vi/${this.state.values.thumbID}/hqdefault.jpg`} onError={() => this.handleErrorImage()} /></div>
                    <input placeholder="Playlist" autoComplete="off" list="playlists" value={this.state.values.playlist || ""} name="playlist" onChange={this.HandleForm} />
                    <datalist id="playlists">
                        {this.state.playlists.map((e, i) => <option key={i} value={e} />)}
                    </datalist>
                    <input placeholder="Titulo do vídeo" name="title" value={this.state.values.title || ""} onChange={this.HandleForm} />
                    <input placeholder="URL" name="url" value={this.state.values.url || ""} onChange={this.HandleForm} />
                    <button type="submit">Cadastrar</button>
                </div>
            </form>)}
        </StyledRegisterVideo>);
    }
}

const IconAddVideo = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
        </svg>
    );
}

const IconCloseModal = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z" />
    </svg>);
}

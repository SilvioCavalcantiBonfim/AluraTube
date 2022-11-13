import React from "react";
import styled from "styled-components";
import { createClient } from '@supabase/supabase-js';

const StyledTimeline = styled.div`
    flex: 1;
    width: 100%;
    padding: 16px;
    overflow: hidden;
    h2 {
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    img {
        aspect-ratio: 16/9;
        font-weight: 500;
        object-fit: cover;
        width: 100%;
        max-width: 210px;
        height: auto;
    }
    section {
        width: 100%;
        padding: 0;
        overflow: hidden;
        padding: 16px;
        div {
            width: calc(100vw - 16px * 4);
            display: grid;
            grid-gap: 16px;
            grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
            grid-auto-flow: column;
            grid-auto-columns: minmax(200px,1fr);
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            a {
                scroll-snap-align: start;
                    span {
                        padding-top: 8px;
                        display: block;
                        padding-right: 24px;
                        color: ${({ theme }) => theme.textColorBase || "#222222"};
                    }
                }
            }
    }
`;


const TimeLine = (props) => {
    const SupaBase = createClient(process.env.NEXT_PUBLIC_PROJECT_URL, process.env.NEXT_PUBLIC_API_KEY);
    const [Content, setContent] = React.useState({});

    SupaBase.channel('*').on('postgres_changes', { event: '*', schema: '*' }, payload => {
        location.reload()
    }).subscribe()

    React.useEffect(() => {
        let playlists = {};
        const db = async () => {
            await SupaBase.from("playlists").select('id,playlist').then(data => {
                data.data.map((e) => {
                    if (!playlists[e.playlist])
                        playlists[e.playlist] = []
                    SupaBase.from("videos").select('id, title, url, thumb').eq('playlist', e.id).then(r => {
                        playlists[e.playlist] = r.data
                        setContent(v => { return { ...v, ...playlists } });
                    })
                });
            });
        }
        db();
    }, []);
    return (<StyledTimeline>
        {Object.keys(Content).map(_playlist => {
            let Content_Playlist = Content[_playlist].filter(e => {
                return e.title.toLowerCase().includes(props.filter.toLowerCase());
            })
            return (Content_Playlist.length > 0 && <PlayList key={_playlist} playlist={Content_Playlist} title={_playlist} />)
        })}
    </StyledTimeline>);
}

const PlayList = (props) => {
    return (<section>
        <h2>{props.title}</h2>
        <div>
            {props.playlist.map((video, i) => {
                return <a key={i} href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                </a>
            })}
        </div>
    </section>);
}

export default TimeLine;
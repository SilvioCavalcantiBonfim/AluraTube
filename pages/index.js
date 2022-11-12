import React from "react";
import config from "../config.json";
import Header from "../src/components/header";
import styled from "styled-components";
import TimeLine from "../src/components/timeline";
import Menu from "../src/components/menu";
import { createClient } from '@supabase/supabase-js';

const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const HomePage = () => {
    const SupaBase = createClient(process.env.NEXT_PUBLIC_PROJECT_URL, process.env.NEXT_PUBLIC_API_KEY);

    const [scrollPosition, setScrollPosition] = React.useState(0);
    const [filter, setFilter] = React.useState("");
    const [content, setContent] = React.useState({});
    React.useEffect(() => {
        window.addEventListener("scroll", (event) => {
            setScrollPosition(window.scrollY);
        });
        let playlists = {};
        SupaBase.from("playlists").select("*").then(data => {
            data.data.map((e) => {
                if (!playlists[e.playlist])
                    playlists[e.playlist] = []
                SupaBase.from("videos").select('id, title, url, thumb').eq('playlist', e.id).then(r => playlists[e.playlist] = r.data)
            }); 
        });
        return () => setContent(playlists);
    }, []);

    const HandleFilter = (a) => {
        setFilter(a);
    }
    return (<StyledHomePage>
        <Menu scrollPosition={scrollPosition} HandleFilter={HandleFilter} filter={filter} />
        <Header {...config} />
        <TimeLine playlists={content} filter={filter} />
    </StyledHomePage>);
}

export default HomePage;
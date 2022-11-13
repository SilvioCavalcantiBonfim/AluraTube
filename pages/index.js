import React, { useState } from "react";
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
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const [filter, setFilter] = React.useState("");
    // const Content = React.useContext(ContentContext);
    const [Content, setContent] = useState({});

    React.useEffect(() => {
        window.addEventListener("scroll", (event) => {
            setScrollPosition(window.scrollY);
        });
        // const SupaBase = createClient(process.env.NEXT_PUBLIC_PROJECT_URL, process.env.NEXT_PUBLIC_API_KEY);
        // let playlists = {};
        // SupaBase.from("playlists").select("*").then(data => {
        //     data.data.map((e) => {
        //         if (!playlists[e.playlist])
        //             playlists[e.playlist] = []
        //         SupaBase.from("videos").select('id, title, url, thumb').eq('playlist', e.id).then(r => playlists[e.playlist] = r.data);
        //     });
        //     setContent(playlists);
        //     console.log("update")
        // });
    }, []);

    const HandleFilter = (a) => {
        setFilter(a);
    }
    return (<StyledHomePage>
        <Menu scrollPosition={scrollPosition} HandleFilter={HandleFilter} filter={filter} />
        <Header {...config} />
        <TimeLine filter={filter} Content={Content} setContent={setContent}/>
    </StyledHomePage>);
}

export default HomePage;
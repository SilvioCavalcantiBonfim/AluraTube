import React from "react";

export default function home(params) {
    const [Content,setContent] = React.useState({music: [{teste: "teste"}]});
    React.useEffect(() => {
        add("music", {teste: "teste"})
    },[])

    const add = (e,v) => {
        setContent(VV => {
            if(!VV[e])
                VV[e] = []
            if(VV[e].indexOf(v) === -1)
            VV[e].push(v)
            return VV
        })
    }

    const certificate = (array, value) => {

    }
    return(<div>{JSON.stringify(Content)}</div>);
}
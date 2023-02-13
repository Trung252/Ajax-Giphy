let keyWord, keyAPI = 'yFtEcr2QveE6STw3KfCdpLFhweh9haFP';
let $ = document
    .querySelector
    .bind(document);

    document.getElementById("formInput").addEventListener('reset',()=>$('root').innerHTML='');
    document.getElementById("formInput").addEventListener('submit',(e)=>onSubmitForm(e));

    getData=async(keyWord,keyAPI)=>{
        try{
            let{data} = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${keyWord}&api_key=${keyAPI}`);
            return data.data;
        }catch(e){
            window.confirm(e);
        }
    }
    onSubmitForm=async(e)=> {
        e.preventDefault();
        keyWord = document.getElementById('in').value;
        console.log(e)
        displayGiphy(await getData(keyWord,keyAPI))
    }
    displayGiphy = (giphyData) => {
        console.log(giphyData)
        giphyData.slice(0,10).map(data => {
            document.getElementById('root').innerHTML += '<img class="gip-thumnail ctn fct" src="${data.images.fixed_height.url}"></img>'
        })
    }
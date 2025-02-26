subb=document.getElementById("sub");
code=document.getElementById("sub_code");
years=document.getElementById("year");
time=document.getElementById("sea");
no=document.getElementById("p_no");
vari=document.getElementById("p_var");
link="https://pastpapers.co/cie/IGCSE/"
t=""
s_and_c={"0610":"Biology","0625":"Physics","0620":"Chemistry","0500":"English-First-Language","0580":"Mathematics","0680":"Environmental-Management","0417":"Information-and-Communication-Technology",};

function paper(){
    scode=code.value;
    subject=s_and_c[scode];    
    y1=years.value;
    n=no.value;
    v=vari.value;
    y2=y1.slice(-2);
    season=time.value;
    if (season=="ON"){
        t1="-Oct-Nov/"
        t2="w"
    }
    else if(season=="MJ"){
        t1="-May-June/"
        t2="s"
    }
    else if(season=="FM"){
        t1="-March/"
        t2="m"
    }
    moq=document.getElementById("mq").value
    link=link+subject+"-"+scode+"/"+y1+t1+scode+"_"+t2+y2+"_"+moq+"_"+n+v+".pdf"
    console.log(link);
    window.open(link);
    link="https://pastpapers.co/cie/IGCSE/"
}
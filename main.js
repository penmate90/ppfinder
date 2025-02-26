subb=document.getElementById("sub");
code=document.getElementById("sub_code");
years=document.getElementById("year");
time=document.getElementById("sea");
no=document.getElementById("p_no");
vari=document.getElementById("p_var");
link="https://pastpapers.co/cie/IGCSE/"
t=""
function paper(){
    subject=sub.value;
    scode=code.value;
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

    link=link+subject+"-"+scode+"/"+y1+t1+scode+"_"+t2+y2+"_qp_"+n+v+".pdf"
    console.log(link);
    window.open(link);
}
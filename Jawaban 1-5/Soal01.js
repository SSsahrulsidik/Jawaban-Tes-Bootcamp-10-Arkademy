// Soal 1
// Buatlah sebuah method/function untuk me-return biodata Anda, dengan ketentuan
// - name(string)
// 	- address (String)
// 	- hobbies (Array)
// 	- is_married (Boolean)
// 	- school (Obj) with key highSchool, and university
// 	- skills (Array of Obj, with key “name” and “score”)
// 	Return value harus berformat JSON!
	
// Pada readme sebutkan apa itu REST API dan kegunaan JSON pada REST API, dan dipelajarin yaa..


// ini mengmbil id soal-01 
// yang nantinya hasil dari doccument.write akan di tampilkan di  di child dari class soal-1
// serang di console.log dulu buat mengetahui hasilnya, kalo keburu mengerjakannya akan di tampilkan di htmlnya
const soal1 = document.getElementById('soal-01');

const biodataKu = {
    name: 'Sahrul Sidik',
    address: 'Kp. Lamping, Kel. Gedong Panjang, Kec. Citamiang, Kota Sukabumi',
    hobbies: [
        "read",
        "playing some music like a guitar",
        "learning tutorial from the internet"
    ],
    is_married: false,
    school: {
        highSchool: "SMAN 1 KALIBUNDER 2010-2013", 
        University: "STIE PGRI SUKABUMI 2013-2017" 
    },
    skills : [
    {
        name:  "Basic & Intermediate JavaScript ",
        score: 80
    }
    ],
    nama(){
        console.log(this.name);
    },
    alamat(){
        console.log(this.address);
    },
    hobi(){
        console.log(this.hobbies);
    },
    statusMenikah(){
        if(this.is_married === false) {
            console.log("Belum Menikah Atau =", this.is_married);
        }
    },
    sekolah(){
        console.log(this.school);
    },
    kemampuan(){
        this.skills.forEach(() => {
            console.log(this.skills[0]);
        });
    }
};

biodataKu.nama();
// Sahrul Sidik
biodataKu.alamat();
// Kp. Lamping, Kel. Gedong Panjang, Kec. Citamiang, Kota Sukabu
biodataKu.hobi();
// (3) ["read", "playing some music like a guitar", "learning tutorial from the internet"]
biodataKu.statusMenikah();
// Belum Menikah Atau = false
biodataKu.sekolah();
// {highSchool: "SMAN 1 KALIBUNDER 2010-2013", University: "STIE PGRI SUKABUMI 2010-2013"}
biodataKu.kemampuan();
// {name: "Basic & Intermediate JavaScript ", score: 80}










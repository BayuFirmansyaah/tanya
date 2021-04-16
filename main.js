alert(`hi kamu,Selamat datang`);
let waktu;
let mau;
let siap;
let cek = false;

waktu = confirm(`boleh kah aku minta waktu mu sebentar ?`)

if(waktu == true){

	siap = confirm(`oke,apakah kamu sudah siap ?`);
	if(siap == true){
		alert(`jujur aku suka sama kamu`)
		alert(`tapi aku ga berani ngungkapin nya`)
		alert('tapi kali ini aku mencoba membranikan diri')
		mau = confirm(`Kamu Mau ga jadi pacar aku ?`)
		
		if(mau == true){
			document.querySelector('h1').innerText = `Horee Sekarang kita sudah resmi jadian !!!`
		}else{
			while(cek == false){
				 mau = confirm(`Kamu Mau ga jadi pacar aku ?`)
				 cek = mau;
			}

			if(cek == true){
				document.querySelector('h1').innerText = `Horee Sekarang kita sudah resmi jadian !!!`
			}
		} 

	}else{
		cek = false;

		while(cek == false){
			siap = confirm(`oke,apakah kamu sudah siap ?`);
			cek = siap;
		}

		if(cek == true){
			alert(`jujur aku suka sama kamu`)
			alert(`tapi aku ga berani ngungkapin nya`)
			alert('tapi kali ini aku mencoba membranikan diri')
			mau = confirm(`Kamu Mau ga jadi pacar aku ?`)
		
			if(mau == true){
				document.querySelector('h1').innerText = `Horee Sekarang kita sudah resmi jadian !!!`
			}else{
				cek = false;
				while(cek == false){
				mau = confirm(`Kamu Mau ga jadi pacar aku ?`)
				cek = mau;
			}

			if(cek == true){
				document.querySelector('h1').innerText = `Horee Sekarang kita sudah resmi jadian !!!`
			}
		} 
		}
	
	} 

}else{
	while(cek == false){
		waktu = confirm(`boleh kah aku minta waktu mu sebentar ?`)
		cek = waktu;
	}

	siap = confirm(`oke,apakah kamu sudah siap ?`);
	if(siap == true){
		alert(`jujur aku suka sama kamu`)
		alert(`tapi aku ga berani ngungkapin nya`)
		alert('tapi kali ini aku mencoba membranikan diri')
		mau = confirm(`Kamu Mau ga jadi pacar aku ?`)
		if(mau == true){
			document.querySelector('h1').innerText = `Horee Sekarang kita sudah resmi jadian !!!`
		}else{
			cek = false;
			while(cek == false){
				 mau = confirm(`Kamu Mau ga jadi pacar aku ?`)
				 cek = mau;
			}
			if(cek == true){
				document.querySelector('h1').innerText = `Horee Sekarang kita sudah resmi jadian !!!`
			}
		} 
	}else{
		cek = false;
		while(cek == false){
			siap = confirm(`oke,apakah kamu sudah siap ?`);
			cek = siap;
		}

		if(cek == true){
			alert(`jujur aku suka sama kamu`)
		alert(`tapi aku ga berani ngungkapin nya`)
		alert('tapi kali ini aku mencoba membranikan diri')
		mau = confirm(`Kamu Mau ga jadi pacar aku ?`)
		if(mau == true){
			document.querySelector('h1').innerText = `Horee Sekarang kita sudah resmi jadian !!!`
		}else{
			cek = false;
			while(cek == false){
				 mau = confirm(`Kamu Mau ga jadi pacar aku ?`)
				 cek = mau;
			}
			if(cek == true){
				document.querySelector('h1').innerText = `Horee Sekarang kita sudah resmi jadian !!!`
			}
		} 
		}
	} 


	
}

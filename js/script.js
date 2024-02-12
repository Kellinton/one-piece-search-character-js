const personagens = [
    {
        nome: 'luffy',
        imagem: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82270e70-01a6-4570-8622-80a356bb7daa/d5bv887-bc1a96d9-e9ff-4ad8-9d2c-739b81064c53.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyMjcwZTcwLTAxYTYtNDU3MC04NjIyLTgwYTM1NmJiN2RhYVwvZDVidjg4Ny1iYzFhOTZkOS1lOWZmLTRhZDgtOWQyYy03MzliODEwNjRjNTMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9dQSgWVO0kAOsUbNu7OQINxMfY8kYUNfftrGVCP9Ncs'   
    }
    ,
    {
        nome: 'zoro',
        imagem: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82270e70-01a6-4570-8622-80a356bb7daa/d4ck4ke-c5decbbb-3237-434c-a258-4026089040ee.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyMjcwZTcwLTAxYTYtNDU3MC04NjIyLTgwYTM1NmJiN2RhYVwvZDRjazRrZS1jNWRlY2JiYi0zMjM3LTQzNGMtYTI1OC00MDI2MDg5MDQwZWUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JhmQ6A6enuXhDaGsqO1qzChPjUAfiFGOYoEdq7yMgGs'   
    }
    ,
    {
        nome: 'sanji',
        imagem: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82270e70-01a6-4570-8622-80a356bb7daa/d47xwa6-cc848820-02c6-4201-83e1-b7c2d9e20451.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyMjcwZTcwLTAxYTYtNDU3MC04NjIyLTgwYTM1NmJiN2RhYVwvZDQ3eHdhNi1jYzg0ODgyMC0wMmM2LTQyMDEtODNlMS1iN2MyZDllMjA0NTEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8rTFdC09wuw8ZQRKy7e_rB7_PdEKMFBXUAGK6M0R1Tc'   
    }
    ,
    {
        nome: 'usopp',
        imagem: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82270e70-01a6-4570-8622-80a356bb7daa/d4a8k3i-5cef84df-b772-4cdc-842f-5cadd65f4061.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyMjcwZTcwLTAxYTYtNDU3MC04NjIyLTgwYTM1NmJiN2RhYVwvZDRhOGszaS01Y2VmODRkZi1iNzcyLTRjZGMtODQyZi01Y2FkZDY1ZjQwNjEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.INEa4BBIQTTJwAcxD9aXR2OhfNXhfsvc-lBJIcW0X6Q'
    }
    ,
    {
        nome: 'nami',
        imagem: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82270e70-01a6-4570-8622-80a356bb7daa/d45hqm2-0c77634a-e3a4-4115-add5-ffa37859ddc9.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyMjcwZTcwLTAxYTYtNDU3MC04NjIyLTgwYTM1NmJiN2RhYVwvZDQ1aHFtMi0wYzc3NjM0YS1lM2E0LTQxMTUtYWRkNS1mZmEzNzg1OWRkYzkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ic49YLENZWqQ12FZ_irvEEYx7x1t3AMfevuA7OqVi18'
    }
    ,
    {
        nome: 'robin',
        imagem: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82270e70-01a6-4570-8622-80a356bb7daa/d41yw3p-055a1161-b08e-4329-b877-56cc61719490.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyMjcwZTcwLTAxYTYtNDU3MC04NjIyLTgwYTM1NmJiN2RhYVwvZDQxeXczcC0wNTVhMTE2MS1iMDhlLTQzMjktYjg3Ny01NmNjNjE3MTk0OTAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5FjcahzeRqDe2YeciW8u0j7Qv_8aBLV1UXm4rlmxfnA'
    }
    ,
    {
        nome: 'franky',
        imagem: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82270e70-01a6-4570-8622-80a356bb7daa/d4hpss6-a5130c36-956d-41ae-aca9-383813844b3a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyMjcwZTcwLTAxYTYtNDU3MC04NjIyLTgwYTM1NmJiN2RhYVwvZDRocHNzNi1hNTEzMGMzNi05NTZkLTQxYWUtYWNhOS0zODM4MTM4NDRiM2EuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ecnZAiw7JDav-1QjLisT27P24J_1KCunAAuoRjjHvXY'
    }
    ,
    {
        nome: 'brook',
        imagem: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82270e70-01a6-4570-8622-80a356bb7daa/d478b99-4b7d2140-1e4e-4d9f-8565-870e932b30b4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyMjcwZTcwLTAxYTYtNDU3MC04NjIyLTgwYTM1NmJiN2RhYVwvZDQ3OGI5OS00YjdkMjE0MC0xZTRlLTRkOWYtODU2NS04NzBlOTMyYjMwYjQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FMIw5uM_Nw9e2Oz6KpRW6x86c340FM6BuOMNILt7wiE'
    }
    ,
    {
        nome: 'chopper',
        imagem: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82270e70-01a6-4570-8622-80a356bb7daa/d45nel0-57263c02-124d-4d62-9833-36085fe18c16.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyMjcwZTcwLTAxYTYtNDU3MC04NjIyLTgwYTM1NmJiN2RhYVwvZDQ1bmVsMC01NzI2M2MwMi0xMjRkLTRkNjItOTgzMy0zNjA4NWZlMThjMTYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7PgLtWaWdoKdMPFOan02biWzLMLnBwonXQJ8TVN76o0'
    }
    ,
    {
        nome: 'jinbe',
        imagem: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9c4f54d-5666-4c3c-94bf-a31a99b26980/dfhjtce-c4858002-fcc1-441f-9f5b-7106533be1a6.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M5YzRmNTRkLTU2NjYtNGMzYy05NGJmLWEzMWE5OWIyNjk4MFwvZGZoanRjZS1jNDg1ODAwMi1mY2MxLTQ0MWYtOWY1Yi03MTA2NTMzYmUxYTYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TkWMEn6IVbVYlJdPKaJmBvp4ahdkM1a0Nj0Urn74ctI'
    }
    ,
]

function buscarImagem(event) {
    event.preventDefault(); 

    let personagemDigitado = document.getElementById('inputPersonagem').value.toLowerCase();
    let indice = personagens.findIndex(function(personagens) {
        return personagens.nome === personagemDigitado;
    });
    if (indice !== -1) {
        let imagemPersonagem = document.getElementById('imagemPersonagem');
        let imagemElement = document.createElement('img');
        imagemElement.src = personagens[indice].imagem;
        imagemElement.alt = personagens[indice].nome;
        imagemElement.style.width = '100%';
        imagemElement.style.height = '100%';
        imagemElement.style.borderRadius = '20px';
        imagemElement.style.margin = '1px';
        imagemElement.style.padding = '1px';
        imagemElement.style.cursor = 'pointer';
        
        imagemPersonagem.innerHTML = ''; 
        imagemPersonagem.appendChild(imagemElement); 
    } else {
        alert('Personagem não encontrado.');
    }
}


//input
anoNascimento = 1987
nome = "Gustavo"

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento
mensagem = " Sou " + nome + " e tenho " + idade + " anos ";

//output
alert(mensagem)
class Matematica {
    

    /**
     * O método static pode ser usado sem a nessidade de instanciar
     * a classe.
     * O método static serve para auxiliar em alguma operação, ele 
     * recebe um valor e retorna alguma informação. Ele não "enxerga"
     * o que existe no restante da classe.
     */
    static soma(a, b){
        return a + b;
    }
}

console.log (Matematica.soma(1,2));
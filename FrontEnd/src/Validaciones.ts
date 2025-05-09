export const validarPrimeraLetraMayuscula = (valor: string) => {
    if (!valor) return true;
    const primeraLetra = valor.charAt(0);
    return primeraLetra === primeraLetra.toUpperCase() || 'La primera letra debe ser mayúscula';
  };
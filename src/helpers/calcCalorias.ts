
export const calcCalories = (edad: number,  genero: 0|1, altura:number, peso:number, actividad: number) => {
    let metabolismoBasal = 0;
  
    if (genero === 0) {
      metabolismoBasal =
        66.47 + 13.75 * peso + 5.003 * altura - 6.755 * edad;
    } else if (genero === 1) {
      metabolismoBasal =
        655.1 + 9.563 * peso + 1.85 * altura - 4.676 * edad;
    }

    const caloriasNecesarias = metabolismoBasal * actividad;
    return Math.round(caloriasNecesarias);
  };
import colors from '../constants/statusColor';

export const statusToColor = (status) => {
  switch(status) {
    case 'Moving':
      return colors.moving;
    case 'Out of Region':
      return colors.outOfRegion;
    case 'Offline':
      return colors.offline;
    case 'Parked':
      return colors.parked;
    case 'Idling':
      return colors.idling;
    default: return null;
  }
}
  
export const statusData = (fleetData) => {
  const status = fleetData.reduce((allData, itemData) => {
    const index = allData.findIndex((elm) => elm.text === itemData.status);
    if(index > -1) {
        allData[index].number++
    } else {
        allData.push({text: itemData.status, number: 1, color: statusToColor(itemData.status), active: false})
    }

    return allData;
  }, []);

  return status;
}
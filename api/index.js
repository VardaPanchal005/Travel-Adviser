import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
        {params: {
            bl_latitude: '20.11922869614276',
            tr_latitude: '24.71253623436224',
            bl_longitude: '68.17751181716889',
            tr_longitude: '74.47643242348471',
            limit: '30',
            currency: 'INR',
            lunit: 'km',
            lang: 'en_US'
          }, 
          
         headers: {
         'X-RapidAPI-Key': 'e12426bee7msh0bda1b5d0bd43d8p184a76jsne7d6d7916c9e' ,
         'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        },
    }
  );

  return data;
} catch (error) {
  return null;
}
};

import v1 from './image/v1.jpg';
import v2 from './image/v2.jpg';
import v3 from './image/v3.jpg';
import v4 from './image/v4.jpg';
import v5 from './image/v5.jpg';
import v6 from './image/v6.jpg';
import a1 from './image/a1.jpeg';
import a2 from './image/a2.jpeg';
import a3 from './image/a3.jpeg';
import a4 from './image/a4.jpeg';
import a5 from './image/a5.jpeg';
import a6 from './image/a6.jpeg';
import s1 from './image/s1.jpeg';
import s2 from './image/s2.jpeg';
import s3 from './image/s3.jpeg';
import s4 from './image/s4.jpeg';
import s5 from './image/s5.jpeg';
// import bg from './image/bg.jpg';
// import s6 from './image/s6.jpeg';

const moviesname = [
        { id: 1, actor: "Vijay", movies: "Goat", },
        { id: 2, actor: "Vijay", movies: "Leo" },
        { id: 3, actor: "Vijay", movies: "Varisu" },
        { id: 4, actor: "Vijay", movies: "Master" },
        { id: 5, actor: "Vijay", movies: "Beast" },
        { id: 6, actor: "Suriya", movies: "Jai_Bhim" },
        { id: 7, actor: "Suriya", movies: "Soorarai_Pottru" },
        { id: 8, actor: "Suriya", movies: "Kanguva" },
        { id: 9, actor: "Suriya", movies: "Kaappaan" },
        { id: 10, actor: "Ajith", movies: "Vidaamuyarchi" },
        { id: 11, actor: "Ajith", movies: "Good_Bad_Ugly" },
        { id: 12, actor: "Ajith", movies: "Thunivu" },
        { id: 13, actor: "Ajith", movies: "Valimai" },
        { id: 14, actor: "Ajith", movies: "Viswasam" }
    ];
const image={
        "Goat" :[v1,v2,v3,v4,v5,v6],
        "Soorarai_Pottru" :[s1,s2,s3,s4,s5],
        "Viswasam" :[a1,a2,a3,a4,a5,a6]
    }
const detail=[
    {"id": 1000, "movies": "Goat", "cast": "Vijay", "detail1": "Vijay plays the lead role in 'Goat', an action-packed thriller with a gripping storyline."},
    {"id": 1001, "movies": "Goat", "cast": "Meenakshi Chaudhary", "detail1": "Meenakshi Chaudhary plays the female lead, bringing elegance and depth to the story."},
    {"id": 1002, "movies": "Goat", "cast": "Sneha Prasanna", "detail1": "Sneha Prasanna portrays a crucial supporting role, adding emotional weight to the film."},
    {"id": 1003, "movies": "Goat", "cast": "Trisha Krishnan", "detail1": "Trisha Krishnan plays a significant role, elevating the film’s dramatic essence."},
    {"id": 1004, "movies": "Goat", "cast": "Prabhu Deva", "detail1": "Prabhu Deva showcases his versatile acting along with his signature dance moves."},
    {"id": 1005, "movies": "Goat", "cast": "Prashanth Thyagarajan", "detail1": "Prashanth Thyagarajan plays a key role, contributing to the film’s action sequences."},
    {"id": 2000, "movies": "Soorarai_Pottru", "cast": "Suriya Sivakumar", "detail1": "Suriya Sivakumar plays the lead role, inspired by the life of G. R. Gopinath, the founder of Air Deccan."},
    {"id": 2001, "movies": "Soorarai_Pottru", "cast": "Aparna Balamurali", "detail1": "Aparna Balamurali plays the female lead, portraying a strong and determined character."},
    {"id": 2002, "movies": "Soorarai_Pottru", "cast": "Paresh Rawal", "detail1": "Paresh Rawal plays a pivotal antagonist, representing corporate hurdles in the aviation industry."},
    {"id": 2003, "movies": "Soorarai_Pottru", "cast": "Urvashi", "detail1": "Urvashi delivers a heartfelt performance as the protagonist's mother, adding emotional depth."},
    {"id": 2004, "movies": "Soorarai_Pottru", "cast": "Prakash Belawadi", "detail1": "Prakash Belawadi plays an aviation official, challenging the protagonist’s journey."},
    // {"id": 2005, "movies": "Soorarai_Pottru", "cast": "Kaali Venkat", "detail1": "Kaali Venkat brings humor and emotional support in his role as the protagonist’s friend."},
    {"id": 3000, "movies": "Viswasam", "cast": "Ajith Kumar", "detail1": "Ajith Kumar plays the protagonist, a fearless village leader who fights to protect his family."},
    {"id": 3001, "movies": "Viswasam", "cast": "Nayanthara", "detail1": "Nayanthara plays the female lead, portraying a strong and independent woman."},
    {"id": 3002, "movies": "Viswasam", "cast": "Jagapathi Babu", "detail1": "Jagapathi Babu plays the antagonist, delivering a powerful and menacing performance."},
    {"id": 3003, "movies": "Viswasam", "cast": "Anikha Surendran", "detail1": "Anikha Surendran plays Ajith Kumar’s daughter, forming the emotional core of the film."},
    {"id": 3004, "movies": "Viswasam", "cast": "Robo Shankar", "detail1": "Robo Shankar provides comic relief, bringing lighter moments to the intense storyline."},
    {"id": 3005, "movies": "Viswasam", "cast": "Vivek", "detail1": "Vivek adds humor and wisdom in his role, contributing to the film’s family-oriented theme."}
]

const logindata=[
    {"no":1,"login":"ganesh","password":"ganesh123"},
    {"no":2, "login":"hari","password":"hari123"},
    {"no":3,"login":"g","password":"g"}
]
export {moviesname,detail,image,logindata}
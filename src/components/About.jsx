
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
const About = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        padding: theme.spacing(4),
        textAlign: 'center',
    }));
    return (
        <div style={{ marginTop: '300px' }} >
            <p>
                <p dir="RTL" font-size="16">&nbsp;</p>
                <p dir="RTL" font-size="16">
                    החברה שלנו מתמחה בייבוא ושיווק סדרות ייחודיות ואיכותיות של כלי בישול ואביזרים משלימים למטבח המקצועי
<br />
והפרטי, ממגוון מותגים מובילים בעולם. החברה המשפחתית, הוקמה בשנת 2011 מתוך אהבה לעולם הבישול והאפייה,
<br />
עולם קולינרי עטוף בריחות, טעמים וצבעים, בחום, שיתוף ומשפחתיות.
</p>
                <p dir="RTL" font-size="16">&nbsp;</p>
                <p dir="RTL" font-size="16">
                    מוצרינו משווקים במאות נקודות מכירה, רשתות מתמחות ומקצועיות, ועדי עובדים ומועדוני צרכנות, אתרי סחר שונים, לצד חנויות
 <br />
 רשת הנושאות את שם המותג, ואתר בית שהפך תוך זמן קצר לאתר כלי הבית המוביל בישראל.
 </p>
                <p dir="RTL" font-size="16">&nbsp;</p>
                <p dir="RTL" font-size="16">

                    במהלך השנים האחרונות, השקיעה החברה רבות בכדי לבדל עצמה ולהציע ללקוח תשוקה גסטרונומית, תוכן עם ערך מוסף וכמובן מוצרים באיכות
<br />
 מעולה, שנוצרו מחדשנות, תשומת הלב וקפדנות לפרטים הקטנים, המבטאים את החזון שלנו  : לעורר השראה ויצירתיות בקרב
 <br />
 לקוחותיה, לעודד אותם לאמץ אורח חיים בריא )גם בבחירת כלי המטבח( ולהכניס שמחה וחדוות יצירה דרך חווית בישול במגוון רחב של כלים
    <br />
 מתקדמים, העונה על כל צרכי המטבח.
</p>
                <p dir="RTL" font-size="16">&nbsp;</p>
                <p dir="RTL" font-size="16">

                    כמו שאנו אוהבים לפתח וליצור את המוצרים שלנו, כך אנו שואפים שלקוחותינו יתאהבו בתהליך הבישול, ובהנאה שבאירוח לאחר מכן, אשר יחד עם
<br />
 כלי הבישול שלנו, יושלמו לכדי חוויה מספקת, משביעה, קלה ונוחה לביצוע.
    </p>
                <p dir="RTL" font-size="16">&nbsp;</p>
                <p dir="RTL" font-size="16">
                    עולם המוצרים שלנו מחבר בין צרכי הבשלן בכלים פרקטיים ועמידים, יחד עם עיצוב נחשק וחדשנות
<br />
 טכנולוגית, וכל זאת ברמות מחיר נוחות, המאפשרות לכל שף ביתי למצוא בדיוק את מה שמתאים לו.
 <br />
 עקבו אחרינו:

</p>
            </p>
            <br />
            <br />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Item><AddModeratorIcon /> <h6>הגנה וביטחון מלא בתשלומים</h6> אנו עובדים עם האבטחה ההגבוהה ביותר</Item>
                    <Item><CardGiftcardIcon /> <h6>תהנו ממגוון מתנות שאנו מחלקים</h6> אנו מצפרים את הלקוחות שלנו</Item>
                    <Item><AirportShuttleIcon /> <h6>שרות משלוחים מהיר ואמין</h6> תוכלו לבחור בכמה אופציות של משלוחים</Item>
                    <Item><SentimentSatisfiedAltIcon /> <h6>שביעות רצון גדולה מהלקוחות </h6> רכוש אצלנו ותהנה מהחוויה</Item>
                </Grid>
            </Box>
            <br />
            <br />
            <br />
        </ div>


    )
}

export default About;


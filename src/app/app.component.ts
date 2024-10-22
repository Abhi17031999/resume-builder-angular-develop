import {Component, OnInit} from '@angular/core';
import {FormGroup,FormBuilder, Validators } from '@angular/forms';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { Education, Experience,Projectdeatil} from './resume';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  myForm:FormGroup;
  educationForm:FormGroup;
  projectForm:FormGroup;
  workexperienceForm:FormGroup;
  othersdetailForm:FormGroup;
  count=1;
  defaultMarital="Unmarried"
  formates:any;
  submitted=false;
  submitted1=false;
  submitted2=false;
  submitted3=false;
  defaultPercentage="percentage"
  defaultGender="Male"
  div1=true;
  div2:boolean;
  data:any;
  data1:any;
  data2:any;
  array=[];
  array1=[];
  array2=[];
  cgpa="CGPA"
  course:any;
  institute:any;
  board:any;
  grad="Graduated"
  year:any;
  percentage:any;
  cg:any;
  defaultYes="yes"
  companyName:any;
  experience:any;
  jobdiscription:any;
  projectDetail:any;
  role:any;
  member:any;
  projectName:any;
  text:any;
  state1=[
    {
    name: "Andaman and Nicobar Islands"
    },
    {

    name: "Andhra Pradesh"
    },
    {
    name: "Arunachal Pradesh"
    },
    {
  
    name: "Assam"
    },
    {
   
    name: "Bihar"
    },
    {
    name: "Chandigarh"
    },
    {
    
    name: "Chhattisgarh"
    },
    {
    name: "Dadra and Nagar Haveli"
    },
    {
    name: "Daman and Diu"
    },
    {
   
    name: "Delhi"
    },
    {
    
    name: "Goa"
    },
    {
    
    name: "Gujarat"
    },
    {
     name: "Haryana"
    },
    {
      name: "Himachal Pradesh"
    },
    {
    name: "Jammu and Kashmir"
    },
    {
  
    name: "Jharkhand"
    },
    {
    
    name: "Karnataka"
    },
    {
    name: "Kerala"
    },
    {
    name: "Lakshadweep"
    },
    {
   
     name: "Madhya Pradesh"
    },
    {
   
    name: "Maharashtra"
    },
    {
   
    name: "Manipur"
    },
    {
     name: "Meghalaya"
    },
    {
     name: "Mizoram"
    },
    {
      name: "Nagaland"
    },
    {
     name: "Odisha"
    },
    {
      name: "Puducherry"
    },
    {
      name: "Punjab"
    },
    {
     name: "Rajasthan"
    },
    {
      name: "Sikkim"
    },
    {
      name: "Tamil Nadu"
    },
    {
     name: "Telangana"
    },
    {
     name: "Tripura"
    },
    {
 
    name: "Uttar Pradesh"
    },
    {
 
    name: "Uttarakhand"
    },
    {
      name: "West Bengal"
    }
    ]
  city1=[
      {"city":"Kolhapur", "state":"Maharashtra"},
      {"city":"Port Blair", "state":"Andaman & Nicobar Islands"},
      {"city":"Adilabad", "state":"Andhra Pradesh"},
      {"city":"Adoni", "state":"Andhra Pradesh"},
      {"city":"Amadalavalasa", "state":"Andhra Pradesh"},
      {"city":"Amalapuram", "state":"Andhra Pradesh"},
      {"city":"Anakapalle", "state":"Andhra Pradesh"},
      {"city":"Anantapur", "state":"Andhra Pradesh"},
      {"city":"Badepalle", "state":"Andhra Pradesh"},
      {"city":"Banganapalle", "state":"Andhra Pradesh"},
      {"city":"Bapatla", "state":"Andhra Pradesh"},
      {"city":"Bellampalle", "state":"Andhra Pradesh"},
      {"city":"Bethamcherla", "state":"Andhra Pradesh"},
      {"city":"Bhadrachalam", "state":"Andhra Pradesh"},
      {"city":"Bhainsa", "state":"Andhra Pradesh"},
      {"city":"Bheemunipatnam", "state":"Andhra Pradesh"},
      {"city":"Bhimavaram", "state":"Andhra Pradesh"},
      {"city":"Bhongir", "state":"Andhra Pradesh"},
      {"city":"Bobbili", "state":"Andhra Pradesh"},
      {"city":"Bodhan", "state":"Andhra Pradesh"},
      {"city":"Chilakaluripet", "state":"Andhra Pradesh"},
      {"city":"Chirala", "state":"Andhra Pradesh"},
      {"city":"Chittoor", "state":"Andhra Pradesh"},
      {"city":"Cuddapah", "state":"Andhra Pradesh"},
      {"city":"Devarakonda", "state":"Andhra Pradesh"},
      {"city":"Dharmavaram", "state":"Andhra Pradesh"},
      {"city":"Eluru", "state":"Andhra Pradesh"},
      {"city":"Farooqnagar", "state":"Andhra Pradesh"},
      {"city":"Gadwal", "state":"Andhra Pradesh"},
      {"city":"Gooty", "state":"Andhra Pradesh"},
      {"city":"Gudivada", "state":"Andhra Pradesh"},
      {"city":"Gudur", "state":"Andhra Pradesh"},
      {"city":"Guntakal", "state":"Andhra Pradesh"},
      {"city":"Guntur", "state":"Andhra Pradesh"},
      {"city":"Hanuman Junction", "state":"Andhra Pradesh"},
      {"city":"Hindupur", "state":"Andhra Pradesh"},
      {"city":"Hyderabad", "state":"Andhra Pradesh"},
      {"city":"Ichchapuram", "state":"Andhra Pradesh"},
      {"city":"Jaggaiahpet", "state":"Andhra Pradesh"},
      {"city":"Jagtial", "state":"Andhra Pradesh"},
      {"city":"Jammalamadugu", "state":"Andhra Pradesh"},
      {"city":"Jangaon", "state":"Andhra Pradesh"},
      {"city":"Kadapa", "state":"Andhra Pradesh"},
      {"city":"Kadiri", "state":"Andhra Pradesh"},
      {"city":"Kagaznagar", "state":"Andhra Pradesh"},
      {"city":"Kakinada", "state":"Andhra Pradesh"},
      {"city":"Kalyandurg", "state":"Andhra Pradesh"},
      {"city":"Kamareddy", "state":"Andhra Pradesh"},
      {"city":"Kandukur", "state":"Andhra Pradesh"},
      {"city":"Karimnagar", "state":"Andhra Pradesh"},
      {"city":"Kavali", "state":"Andhra Pradesh"},
      {"city":"Khammam", "state":"Andhra Pradesh"},
      {"city":"Koratla", "state":"Andhra Pradesh"},
      {"city":"Kothagudem", "state":"Andhra Pradesh"},
      {"city":"Kothapeta", "state":"Andhra Pradesh"},
      {"city":"Kovvur", "state":"Andhra Pradesh"},
      {"city":"Kurnool", "state":"Andhra Pradesh"},
      {"city":"Kyathampalle", "state":"Andhra Pradesh"},
      {"city":"Macherla", "state":"Andhra Pradesh"},
      {"city":"Machilipatnam", "state":"Andhra Pradesh"},
      {"city":"Madanapalle", "state":"Andhra Pradesh"},
      {"city":"Mahbubnagar", "state":"Andhra Pradesh"},
      {"city":"Mancherial", "state":"Andhra Pradesh"},
      {"city":"Mandamarri", "state":"Andhra Pradesh"},
      {"city":"Mandapeta", "state":"Andhra Pradesh"},
      {"city":"Manuguru", "state":"Andhra Pradesh"},
      {"city":"Markapur", "state":"Andhra Pradesh"},
      {"city":"Medak", "state":"Andhra Pradesh"},
      {"city":"Miryalaguda", "state":"Andhra Pradesh"},
      {"city":"Mogalthur", "state":"Andhra Pradesh"},
      {"city":"Nagari", "state":"Andhra Pradesh"},
      {"city":"Nagarkurnool", "state":"Andhra Pradesh"},
      {"city":"Nandyal", "state":"Andhra Pradesh"},
      {"city":"Narasapur", "state":"Andhra Pradesh"},
      {"city":"Narasaraopet", "state":"Andhra Pradesh"},
      {"city":"Narayanpet", "state":"Andhra Pradesh"},
      {"city":"Narsipatnam", "state":"Andhra Pradesh"},
      {"city":"Nellore", "state":"Andhra Pradesh"},
      {"city":"Nidadavole", "state":"Andhra Pradesh"},
      {"city":"Nirmal", "state":"Andhra Pradesh"},
      {"city":"Nizamabad", "state":"Andhra Pradesh"},
      {"city":"Nuzvid", "state":"Andhra Pradesh"},
      {"city":"Ongole", "state":"Andhra Pradesh"},
      {"city":"Palacole", "state":"Andhra Pradesh"},
      {"city":"Palasa Kasibugga", "state":"Andhra Pradesh"},
      {"city":"Palwancha", "state":"Andhra Pradesh"},
      {"city":"Parvathipuram", "state":"Andhra Pradesh"},
      {"city":"Pedana", "state":"Andhra Pradesh"},
      {"city":"Peddapuram", "state":"Andhra Pradesh"},
      {"city":"Pithapuram", "state":"Andhra Pradesh"},
      {"city":"Pondur", "state":"Andhra pradesh"},
      {"city":"Ponnur", "state":"Andhra Pradesh"},
      {"city":"Proddatur", "state":"Andhra Pradesh"},
      {"city":"Punganur", "state":"Andhra Pradesh"},
      {"city":"Puttur", "state":"Andhra Pradesh"},
      {"city":"Rajahmundry", "state":"Andhra Pradesh"},
      {"city":"Rajam", "state":"Andhra Pradesh"},
      {"city":"Ramachandrapuram", "state":"Andhra Pradesh"},
      {"city":"Ramagundam", "state":"Andhra Pradesh"},
      {"city":"Rayachoti", "state":"Andhra Pradesh"},
      {"city":"Rayadurg", "state":"Andhra Pradesh"},
      {"city":"Renigunta", "state":"Andhra Pradesh"},
      {"city":"Repalle", "state":"Andhra Pradesh"},
      {"city":"Sadasivpet", "state":"Andhra Pradesh"},
      {"city":"Salur", "state":"Andhra Pradesh"},
      {"city":"Samalkot", "state":"Andhra Pradesh"},
      {"city":"Sangareddy", "state":"Andhra Pradesh"},
      {"city":"Sattenapalle", "state":"Andhra Pradesh"},
      {"city":"Siddipet", "state":"Andhra Pradesh"},
      {"city":"Singapur", "state":"Andhra Pradesh"},
      {"city":"Sircilla", "state":"Andhra Pradesh"},
      {"city":"Srikakulam", "state":"Andhra Pradesh"},
      {"city":"Srikalahasti", "state":"Andhra Pradesh"},
      {"city":"Suryapet", "state":"Andhra Pradesh"},
      {"city":"Tadepalligudem", "state":"Andhra Pradesh"},
      {"city":"Tadpatri", "state":"Andhra Pradesh"},
      {"city":"Tandur", "state":"Andhra Pradesh"},
      {"city":"Tanuku", "state":"Andhra Pradesh"},
      {"city":"Tenali", "state":"Andhra Pradesh"},
      {"city":"Tirupati", "state":"Andhra Pradesh"},
      {"city":"Tuni", "state":"Andhra Pradesh"},
      {"city":"Uravakonda", "state":"Andhra Pradesh"},
      {"city":"Venkatagiri", "state":"Andhra Pradesh"},
      {"city":"Vicarabad", "state":"Andhra Pradesh"},
      {"city":"Vijayawada", "state":"Andhra Pradesh"},
      {"city":"Vinukonda", "state":"Andhra Pradesh"},
      {"city":"Visakhapatnam", "state":"Andhra Pradesh"},
      {"city":"Vizianagaram", "state":"Andhra Pradesh"},
      {"city":"Wanaparthy", "state":"Andhra Pradesh"},
      {"city":"Warangal", "state":"Andhra Pradesh"},
      {"city":"Yellandu", "state":"Andhra Pradesh"},
      {"city":"Yemmiganur", "state":"Andhra Pradesh"},
      {"city":"Yerraguntla", "state":"Andhra Pradesh"},
      {"city":"Zahirabad", "state":"Andhra Pradesh"},
      {"city":"Rajampet", "state":"Andhra Pradesh"},
      {"city":"Along", "state":"Arunachal Pradesh"},
      {"city":"Bomdila", "state":"Arunachal Pradesh"},
      {"city":"Itanagar", "state":"Arunachal Pradesh"},
      {"city":"Naharlagun", "state":"Arunachal Pradesh"},
      {"city":"Pasighat", "state":"Arunachal Pradesh"},
      {"city":"Abhayapuri", "state":"Assam"},
      {"city":"Amguri", "state":"Assam"},
      {"city":"Anandnagaar", "state":"Assam"},
      {"city":"Barpeta", "state":"Assam"},
      {"city":"Barpeta Road", "state":"Assam"},
      {"city":"Bilasipara", "state":"Assam"},
      {"city":"Bongaigaon", "state":"Assam"},
      {"city":"Dhekiajuli", "state":"Assam"},
      {"city":"Dhubri", "state":"Assam"},
      {"city":"Dibrugarh", "state":"Assam"},
      {"city":"Digboi", "state":"Assam"},
      {"city":"Diphu", "state":"Assam"},
      {"city":"Dispur", "state":"Assam"},
      {"city":"Gauripur", "state":"Assam"},
      {"city":"Goalpara", "state":"Assam"},
      {"city":"Golaghat", "state":"Assam"},
      {"city":"Guwahati", "state":"Assam"},
      {"city":"Haflong", "state":"Assam"},
      {"city":"Hailakandi", "state":"Assam"},
      {"city":"Hojai", "state":"Assam"},
      {"city":"Jorhat", "state":"Assam"},
      {"city":"Karimganj", "state":"Assam"},
      {"city":"Kokrajhar", "state":"Assam"},
      {"city":"Lanka", "state":"Assam"},
      {"city":"Lumding", "state":"Assam"},
      {"city":"Mangaldoi", "state":"Assam"},
      {"city":"Mankachar", "state":"Assam"},
      {"city":"Margherita", "state":"Assam"},
      {"city":"Mariani", "state":"Assam"},
      {"city":"Marigaon", "state":"Assam"},
      {"city":"Nagaon", "state":"Assam"},
      {"city":"Nalbari", "state":"Assam"},
      {"city":"North Lakhimpur", "state":"Assam"},
      {"city":"Rangia", "state":"Assam"},
      {"city":"Sibsagar", "state":"Assam"},
      {"city":"Silapathar", "state":"Assam"},
      {"city":"Silchar", "state":"Assam"},
      {"city":"Tezpur", "state":"Assam"},
      {"city":"Tinsukia", "state":"Assam"},
      {"city":"Amarpur", "state":"Bihar"},
      {"city":"Araria", "state":"Bihar"},
      {"city":"Areraj", "state":"Bihar"},
      {"city":"Arrah", "state":"Bihar"},
      {"city":"Asarganj", "state":"Bihar"},
      {"city":"Aurangabad", "state":"Bihar"},
      {"city":"Bagaha", "state":"Bihar"},
      {"city":"Bahadurganj", "state":"Bihar"},
      {"city":"Bairgania", "state":"Bihar"},
      {"city":"Bakhtiarpur", "state":"Bihar"},
      {"city":"Banka", "state":"Bihar"},
      {"city":"Banmankhi Bazar", "state":"Bihar"},
      {"city":"Barahiya", "state":"Bihar"},
      {"city":"Barauli", "state":"Bihar"},
      {"city":"Barbigha", "state":"Bihar"},
      {"city":"Barh", "state":"Bihar"},
      {"city":"Begusarai", "state":"Bihar"},
      {"city":"Behea", "state":"Bihar"},
      {"city":"Bettiah", "state":"Bihar"},
      {"city":"Bhabua", "state":"Bihar"},
      {"city":"Bhagalpur", "state":"Bihar"},
      {"city":"Bihar Sharif", "state":"Bihar"},
      {"city":"Bikramganj", "state":"Bihar"},
      {"city":"Bodh Gaya", "state":"Bihar"},
      {"city":"Buxar", "state":"Bihar"},
      {"city":"Chandan Bara", "state":"Bihar"},
      {"city":"Chanpatia", "state":"Bihar"},
      {"city":"Chhapra", "state":"Bihar"},
      {"city":"Colgong", "state":"Bihar"},
      {"city":"Dalsinghsarai", "state":"Bihar"},
      {"city":"Darbhanga", "state":"Bihar"},
      {"city":"Daudnagar", "state":"Bihar"},
      {"city":"Dehri-on-Sone", "state":"Bihar"},
      {"city":"Dhaka", "state":"Bihar"},
      {"city":"Dighwara", "state":"Bihar"},
      {"city":"Dumraon", "state":"Bihar"},
      {"city":"Fatwah", "state":"Bihar"},
      {"city":"Forbesganj", "state":"Bihar"},
      {"city":"Gaya", "state":"Bihar"},
      {"city":"Gogri Jamalpur", "state":"Bihar"},
      {"city":"Gopalganj", "state":"Bihar"},
      {"city":"Hajipur", "state":"Bihar"},
      {"city":"Hilsa", "state":"Bihar"},
      {"city":"Hisua", "state":"Bihar"},
      {"city":"Islampur", "state":"Bihar"},
      {"city":"Jagdispur", "state":"Bihar"},
      {"city":"Jamalpur", "state":"Bihar"},
      {"city":"Jamui", "state":"Bihar"},
      {"city":"Jehanabad", "state":"Bihar"},
      {"city":"Jhajha", "state":"Bihar"},
      {"city":"Jhanjharpur", "state":"Bihar"},
      {"city":"Jogabani", "state":"Bihar"},
      {"city":"Kanti", "state":"Bihar"},
      {"city":"Katihar", "state":"Bihar"},
      {"city":"Khagaria", "state":"Bihar"},
      {"city":"Kharagpur", "state":"Bihar"},
      {"city":"Kishanganj", "state":"Bihar"},
      {"city":"Lakhisarai", "state":"Bihar"},
      {"city":"Lalganj", "state":"Bihar"},
      {"city":"Madhepura", "state":"Bihar"},
      {"city":"Madhubani", "state":"Bihar"},
      {"city":"Maharajganj", "state":"Bihar"},
      {"city":"Mahnar Bazar", "state":"Bihar"},
      {"city":"Makhdumpur", "state":"Bihar"},
      {"city":"Maner", "state":"Bihar"},
      {"city":"Manihari", "state":"Bihar"},
      {"city":"Marhaura", "state":"Bihar"},
      {"city":"Masaurhi", "state":"Bihar"},
      {"city":"Mirganj", "state":"Bihar"},
      {"city":"Mokameh", "state":"Bihar"},
      {"city":"Motihari", "state":"Bihar"},
      {"city":"Motipur", "state":"Bihar"},
      {"city":"Munger", "state":"Bihar"},
      {"city":"Murliganj", "state":"Bihar"},
      {"city":"Muzaffarpur", "state":"Bihar"},
      {"city":"Narkatiaganj", "state":"Bihar"},
      {"city":"Naugachhia", "state":"Bihar"},
      {"city":"Nawada", "state":"Bihar"},
      {"city":"Nokha", "state":"Bihar"},
      {"city":"Patna", "state":"Bihar"},
      {"city":"Piro", "state":"Bihar"},
      {"city":"Purnia", "state":"Bihar"},
      {"city":"Rafiganj", "state":"Bihar"},
      {"city":"Rajgir", "state":"Bihar"},
      {"city":"Ramnagar", "state":"Bihar"},
      {"city":"Raxaul Bazar", "state":"Bihar"},
      {"city":"Revelganj", "state":"Bihar"},
      {"city":"Rosera", "state":"Bihar"},
      {"city":"Saharsa", "state":"Bihar"},
      {"city":"Samastipur", "state":"Bihar"},
      {"city":"Sasaram", "state":"Bihar"},
      {"city":"Sheikhpura", "state":"Bihar"},
      {"city":"Sheohar", "state":"Bihar"},
      {"city":"Sherghati", "state":"Bihar"},
      {"city":"Silao", "state":"Bihar"},
      {"city":"Sitamarhi", "state":"Bihar"},
      {"city":"Siwan", "state":"Bihar"},
      {"city":"Sonepur", "state":"Bihar"},
      {"city":"Sugauli", "state":"Bihar"},
      {"city":"Sultanganj", "state":"Bihar"},
      {"city":"Supaul", "state":"Bihar"},
      {"city":"Warisaliganj", "state":"Bihar"},
      {"city":"Ahiwara", "state":"Chhattisgarh"},
      {"city":"Akaltara", "state":"Chhattisgarh"},
      {"city":"Ambagarh Chowki", "state":"Chhattisgarh"},
      {"city":"Ambikapur", "state":"Chhattisgarh"},
      {"city":"Arang", "state":"Chhattisgarh"},
      {"city":"Bade Bacheli", "state":"Chhattisgarh"},
      {"city":"Balod", "state":"Chhattisgarh"},
      {"city":"Baloda Bazar", "state":"Chhattisgarh"},
      {"city":"Bemetra", "state":"Chhattisgarh"},
      {"city":"Bhatapara", "state":"Chhattisgarh"},
      {"city":"Bilaspur", "state":"Chhattisgarh"},
      {"city":"Birgaon", "state":"Chhattisgarh"},
      {"city":"Champa", "state":"Chhattisgarh"},
      {"city":"Chirmiri", "state":"Chhattisgarh"},
      {"city":"Dalli-Rajhara", "state":"Chhattisgarh"},
      {"city":"Dhamtari", "state":"Chhattisgarh"},
      {"city":"Dipka", "state":"Chhattisgarh"},
      {"city":"Dongargarh", "state":"Chhattisgarh"},
      {"city":"Durg-Bhilai Nagar", "state":"Chhattisgarh"},
      {"city":"Gobranawapara", "state":"Chhattisgarh"},
      {"city":"Jagdalpur", "state":"Chhattisgarh"},
      {"city":"Janjgir", "state":"Chhattisgarh"},
      {"city":"Jashpurnagar", "state":"Chhattisgarh"},
      {"city":"Kanker", "state":"Chhattisgarh"},
      {"city":"Kawardha", "state":"Chhattisgarh"},
      {"city":"Kondagaon", "state":"Chhattisgarh"},
      {"city":"Korba", "state":"Chhattisgarh"},
      {"city":"Mahasamund", "state":"Chhattisgarh"},
      {"city":"Mahendragarh", "state":"Chhattisgarh"},
      {"city":"Mungeli", "state":"Chhattisgarh"},
      {"city":"Naila Janjgir", "state":"Chhattisgarh"},
      {"city":"Raigarh", "state":"Chhattisgarh"},
      {"city":"Raipur", "state":"Chhattisgarh"},
      {"city":"Rajnandgaon", "state":"Chhattisgarh"},
      {"city":"Sakti", "state":"Chhattisgarh"},
      {"city":"Tilda Newra", "state":"Chhattisgarh"},
      {"city":"Amli", "state":"Dadra & Nagar Haveli"},
      {"city":"Silvassa", "state":"Dadra & Nagar Haveli"},
      {"city":"Daman and Diu", "state":"Daman & Diu"},
      {"city":"Daman and Diu", "state":"Daman & Diu"},
      {"city":"Asola", "state":"Delhi"},
      {"city":"Delhi", "state":"Delhi"},
      {"city":"Aldona", "state":"Goa"},
      {"city":"Curchorem Cacora", "state":"Goa"},
      {"city":"Madgaon", "state":"Goa"},
      {"city":"Mapusa", "state":"Goa"},
      {"city":"Margao", "state":"Goa"},
      {"city":"Marmagao", "state":"Goa"},
      {"city":"Panaji", "state":"Goa"},
      {"city":"Ahmedabad", "state":"Gujarat"},
      {"city":"Amreli", "state":"Gujarat"},
      {"city":"Anand", "state":"Gujarat"},
      {"city":"Ankleshwar", "state":"Gujarat"},
      {"city":"Bharuch", "state":"Gujarat"},
      {"city":"Bhavnagar", "state":"Gujarat"},
      {"city":"Bhuj", "state":"Gujarat"},
      {"city":"Cambay", "state":"Gujarat"},
      {"city":"Dahod", "state":"Gujarat"},
      {"city":"Deesa", "state":"Gujarat"},
      {"city":"Dharampur", "state":" India"},
      {"city":"Dholka", "state":"Gujarat"},
      {"city":"Gandhinagar", "state":"Gujarat"},
      {"city":"Godhra", "state":"Gujarat"},
      {"city":"Himatnagar", "state":"Gujarat"},
      {"city":"Idar", "state":"Gujarat"},
      {"city":"Jamnagar", "state":"Gujarat"},
      {"city":"Junagadh", "state":"Gujarat"},
      {"city":"Kadi", "state":"Gujarat"},
      {"city":"Kalavad", "state":"Gujarat"},
      {"city":"Kalol", "state":"Gujarat"},
      {"city":"Kapadvanj", "state":"Gujarat"},
      {"city":"Karjan", "state":"Gujarat"},
      {"city":"Keshod", "state":"Gujarat"},
      {"city":"Khambhalia", "state":"Gujarat"},
      {"city":"Khambhat", "state":"Gujarat"},
      {"city":"Kheda", "state":"Gujarat"},
      {"city":"Khedbrahma", "state":"Gujarat"},
      {"city":"Kheralu", "state":"Gujarat"},
      {"city":"Kodinar", "state":"Gujarat"},
      {"city":"Lathi", "state":"Gujarat"},
      {"city":"Limbdi", "state":"Gujarat"},
      {"city":"Lunawada", "state":"Gujarat"},
      {"city":"Mahesana", "state":"Gujarat"},
      {"city":"Mahuva", "state":"Gujarat"},
      {"city":"Manavadar", "state":"Gujarat"},
      {"city":"Mandvi", "state":"Gujarat"},
      {"city":"Mangrol", "state":"Gujarat"},
      {"city":"Mansa", "state":"Gujarat"},
      {"city":"Mehmedabad", "state":"Gujarat"},
      {"city":"Modasa", "state":"Gujarat"},
      {"city":"Morvi", "state":"Gujarat"},
      {"city":"Nadiad", "state":"Gujarat"},
      {"city":"Navsari", "state":"Gujarat"},
      {"city":"Padra", "state":"Gujarat"},
      {"city":"Palanpur", "state":"Gujarat"},
      {"city":"Palitana", "state":"Gujarat"},
      {"city":"Pardi", "state":"Gujarat"},
      {"city":"Patan", "state":"Gujarat"},
      {"city":"Petlad", "state":"Gujarat"},
      {"city":"Porbandar", "state":"Gujarat"},
      {"city":"Radhanpur", "state":"Gujarat"},
      {"city":"Rajkot", "state":"Gujarat"},
      {"city":"Rajpipla", "state":"Gujarat"},
      {"city":"Rajula", "state":"Gujarat"},
      {"city":"Ranavav", "state":"Gujarat"},
      {"city":"Rapar", "state":"Gujarat"},
      {"city":"Salaya", "state":"Gujarat"},
      {"city":"Sanand", "state":"Gujarat"},
      {"city":"Savarkundla", "state":"Gujarat"},
      {"city":"Sidhpur", "state":"Gujarat"},
      {"city":"Sihor", "state":"Gujarat"},
      {"city":"Songadh", "state":"Gujarat"},
      {"city":"Surat", "state":"Gujarat"},
      {"city":"Talaja", "state":"Gujarat"},
      {"city":"Thangadh", "state":"Gujarat"},
      {"city":"Tharad", "state":"Gujarat"},
      {"city":"Umbergaon", "state":"Gujarat"},
      {"city":"Umreth", "state":"Gujarat"},
      {"city":"Una", "state":"Gujarat"},
      {"city":"Unjha", "state":"Gujarat"},
      {"city":"Upleta", "state":"Gujarat"},
      {"city":"Vadnagar", "state":"Gujarat"},
      {"city":"Vadodara", "state":"Gujarat"},
      {"city":"Valsad", "state":"Gujarat"},
      {"city":"Vapi", "state":"Gujarat"},
      {"city":"Vapi", "state":"Gujarat"},
      {"city":"Veraval", "state":"Gujarat"},
      {"city":"Vijapur", "state":"Gujarat"},
      {"city":"Viramgam", "state":"Gujarat"},
      {"city":"Visnagar", "state":"Gujarat"},
      {"city":"Vyara", "state":"Gujarat"},
      {"city":"Wadhwan", "state":"Gujarat"},
      {"city":"Wankaner", "state":"Gujarat"},
      {"city":"Adalaj", "state":"Gujrat"},
      {"city":"Adityana", "state":"Gujrat"},
      {"city":"Alang", "state":"Gujrat"},
      {"city":"Ambaji", "state":"Gujrat"},
      {"city":"Ambaliyasan", "state":"Gujrat"},
      {"city":"Andada", "state":"Gujrat"},
      {"city":"Anjar", "state":"Gujrat"},
      {"city":"Anklav", "state":"Gujrat"},
      {"city":"Antaliya", "state":"Gujrat"},
      {"city":"Arambhada", "state":"Gujrat"},
      {"city":"Atul", "state":"Gujrat"},
      {"city":"Ballabhgarh", "state":"Hariyana"},
      {"city":"Ambala", "state":"Haryana"},
      {"city":"Ambala", "state":"Haryana"},
      {"city":"Asankhurd", "state":"Haryana"},
      {"city":"Assandh", "state":"Haryana"},
      {"city":"Ateli", "state":"Haryana"},
      {"city":"Babiyal", "state":"Haryana"},
      {"city":"Bahadurgarh", "state":"Haryana"},
      {"city":"Barwala", "state":"Haryana"},
      {"city":"Bhiwani", "state":"Haryana"},
      {"city":"Charkhi Dadri", "state":"Haryana"},
      {"city":"Cheeka", "state":"Haryana"},
      {"city":"Ellenabad 2", "state":"Haryana"},
      {"city":"Faridabad", "state":"Haryana"},
      {"city":"Fatehabad", "state":"Haryana"},
      {"city":"Ganaur", "state":"Haryana"},
      {"city":"Gharaunda", "state":"Haryana"},
      {"city":"Gohana", "state":"Haryana"},
      {"city":"Gurgaon", "state":"Haryana"},
      {"city":"Haibat(Yamuna Nagar)", "state":"Haryana"},
      {"city":"Hansi", "state":"Haryana"},
      {"city":"Hisar", "state":"Haryana"},
      {"city":"Hodal", "state":"Haryana"},
      {"city":"Jhajjar", "state":"Haryana"},
      {"city":"Jind", "state":"Haryana"},
      {"city":"Kaithal", "state":"Haryana"},
      {"city":"Kalan Wali", "state":"Haryana"},
      {"city":"Kalka", "state":"Haryana"},
      {"city":"Karnal", "state":"Haryana"},
      {"city":"Ladwa", "state":"Haryana"},
      {"city":"Mahendragarh", "state":"Haryana"},
      {"city":"Mandi Dabwali", "state":"Haryana"},
      {"city":"Narnaul", "state":"Haryana"},
      {"city":"Narwana", "state":"Haryana"},
      {"city":"Palwal", "state":"Haryana"},
      {"city":"Panchkula", "state":"Haryana"},
      {"city":"Panipat", "state":"Haryana"},
      {"city":"Pehowa", "state":"Haryana"},
      {"city":"Pinjore", "state":"Haryana"},
      {"city":"Rania", "state":"Haryana"},
      {"city":"Ratia", "state":"Haryana"},
      {"city":"Rewari", "state":"Haryana"},
      {"city":"Rohtak", "state":"Haryana"},
      {"city":"Safidon", "state":"Haryana"},
      {"city":"Samalkha", "state":"Haryana"},
      {"city":"Shahbad", "state":"Haryana"},
      {"city":"Sirsa", "state":"Haryana"},
      {"city":"Sohna", "state":"Haryana"},
      {"city":"Sonipat", "state":"Haryana"},
      {"city":"Taraori", "state":"Haryana"},
      {"city":"Thanesar", "state":"Haryana"},
      {"city":"Tohana", "state":"Haryana"},
      {"city":"Yamunanagar", "state":"Haryana"},
      {"city":"Arki", "state":"Himachal Pradesh"},
      {"city":"Baddi", "state":"Himachal Pradesh"},
      {"city":"Bilaspur", "state":"Himachal Pradesh"},
      {"city":"Chamba", "state":"Himachal Pradesh"},
      {"city":"Dalhousie", "state":"Himachal Pradesh"},
      {"city":"Dharamsala", "state":"Himachal Pradesh"},
      {"city":"Hamirpur", "state":"Himachal Pradesh"},
      {"city":"Mandi", "state":"Himachal Pradesh"},
      {"city":"Nahan", "state":"Himachal Pradesh"},
      {"city":"Shimla", "state":"Himachal Pradesh"},
      {"city":"Solan", "state":"Himachal Pradesh"},
      {"city":"Sundarnagar", "state":"Himachal Pradesh"},
      {"city":"Jammu", "state":"Jammu & Kashmir"},
      {"city":"Achabbal", "state":"Jammu & Kashmir"},
      {"city":"Akhnoor", "state":"Jammu & Kashmir"},
      {"city":"Anantnag", "state":"Jammu & Kashmir"},
      {"city":"Arnia", "state":"Jammu & Kashmir"},
      {"city":"Awantipora", "state":"Jammu & Kashmir"},
      {"city":"Bandipore", "state":"Jammu & Kashmir"},
      {"city":"Baramula", "state":"Jammu & Kashmir"},
      {"city":"Kathua", "state":"Jammu & Kashmir"},
      {"city":"Leh", "state":"Jammu & Kashmir"},
      {"city":"Punch", "state":"Jammu & Kashmir"},
      {"city":"Rajauri", "state":"Jammu & Kashmir"},
      {"city":"Sopore", "state":"Jammu & Kashmir"},
      {"city":"Srinagar", "state":"Jammu & Kashmir"},
      {"city":"Udhampur", "state":"Jammu & Kashmir"},
      {"city":"Amlabad", "state":"Jharkhand"},
      {"city":"Ara", "state":"Jharkhand"},
      {"city":"Barughutu", "state":"Jharkhand"},
      {"city":"Bokaro Steel City", "state":"Jharkhand"},
      {"city":"Chaibasa", "state":"Jharkhand"},
      {"city":"Chakradharpur", "state":"Jharkhand"},
      {"city":"Chandrapura", "state":"Jharkhand"},
      {"city":"Chatra", "state":"Jharkhand"},
      {"city":"Chirkunda", "state":"Jharkhand"},
      {"city":"Churi", "state":"Jharkhand"},
      {"city":"Daltonganj", "state":"Jharkhand"},
      {"city":"Deoghar", "state":"Jharkhand"},
      {"city":"Dhanbad", "state":"Jharkhand"},
      {"city":"Dumka", "state":"Jharkhand"},
      {"city":"Garhwa", "state":"Jharkhand"},
      {"city":"Ghatshila", "state":"Jharkhand"},
      {"city":"Giridih", "state":"Jharkhand"},
      {"city":"Godda", "state":"Jharkhand"},
      {"city":"Gomoh", "state":"Jharkhand"},
      {"city":"Gumia", "state":"Jharkhand"},
      {"city":"Gumla", "state":"Jharkhand"},
      {"city":"Hazaribag", "state":"Jharkhand"},
      {"city":"Hussainabad", "state":"Jharkhand"},
      {"city":"Jamshedpur", "state":"Jharkhand"},
      {"city":"Jamtara", "state":"Jharkhand"},
      {"city":"Jhumri Tilaiya", "state":"Jharkhand"},
      {"city":"Khunti", "state":"Jharkhand"},
      {"city":"Lohardaga", "state":"Jharkhand"},
      {"city":"Madhupur", "state":"Jharkhand"},
      {"city":"Mihijam", "state":"Jharkhand"},
      {"city":"Musabani", "state":"Jharkhand"},
      {"city":"Pakaur", "state":"Jharkhand"},
      {"city":"Patratu", "state":"Jharkhand"},
      {"city":"Phusro", "state":"Jharkhand"},
      {"city":"Ramngarh", "state":"Jharkhand"},
      {"city":"Ranchi", "state":"Jharkhand"},
      {"city":"Sahibganj", "state":"Jharkhand"},
      {"city":"Saunda", "state":"Jharkhand"},
      {"city":"Simdega", "state":"Jharkhand"},
      {"city":"Tenu Dam-cum- Kathhara", "state":"Jharkhand"},
      {"city":"Arasikere", "state":"Karnataka"},
      {"city":"Bangalore", "state":"Karnataka"},
      {"city":"Belgaum", "state":"Karnataka"},
      {"city":"Bellary", "state":"Karnataka"},
      {"city":"Chamrajnagar", "state":"Karnataka"},
      {"city":"Chikkaballapur", "state":"Karnataka"},
      {"city":"Chintamani", "state":"Karnataka"},
      {"city":"Chitradurga", "state":"Karnataka"},
      {"city":"Gulbarga", "state":"Karnataka"},
      {"city":"Gundlupet", "state":"Karnataka"},
      {"city":"Hassan", "state":"Karnataka"},
      {"city":"Hospet", "state":"Karnataka"},
      {"city":"Hubli", "state":"Karnataka"},
      {"city":"Karkala", "state":"Karnataka"},
      {"city":"Karwar", "state":"Karnataka"},
      {"city":"Kolar", "state":"Karnataka"},
      {"city":"Kota", "state":"Karnataka"},
      {"city":"Lakshmeshwar", "state":"Karnataka"},
      {"city":"Lingsugur", "state":"Karnataka"},
      {"city":"Maddur", "state":"Karnataka"},
      {"city":"Madhugiri", "state":"Karnataka"},
      {"city":"Madikeri", "state":"Karnataka"},
      {"city":"Magadi", "state":"Karnataka"},
      {"city":"Mahalingpur", "state":"Karnataka"},
      {"city":"Malavalli", "state":"Karnataka"},
      {"city":"Malur", "state":"Karnataka"},
      {"city":"Mandya", "state":"Karnataka"},
      {"city":"Mangalore", "state":"Karnataka"},
      {"city":"Manvi", "state":"Karnataka"},
      {"city":"Mudalgi", "state":"Karnataka"},
      {"city":"Mudbidri", "state":"Karnataka"},
      {"city":"Muddebihal", "state":"Karnataka"},
      {"city":"Mudhol", "state":"Karnataka"},
      {"city":"Mulbagal", "state":"Karnataka"},
      {"city":"Mundargi", "state":"Karnataka"},
      {"city":"Mysore", "state":"Karnataka"},
      {"city":"Nanjangud", "state":"Karnataka"},
      {"city":"Pavagada", "state":"Karnataka"},
      {"city":"Puttur", "state":"Karnataka"},
      {"city":"Rabkavi Banhatti", "state":"Karnataka"},
      {"city":"Raichur", "state":"Karnataka"},
      {"city":"Ramanagaram", "state":"Karnataka"},
      {"city":"Ramdurg", "state":"Karnataka"},
      {"city":"Ranibennur", "state":"Karnataka"},
      {"city":"Robertson Pet", "state":"Karnataka"},
      {"city":"Ron", "state":"Karnataka"},
      {"city":"Sadalgi", "state":"Karnataka"},
      {"city":"Sagar", "state":"Karnataka"},
      {"city":"Sakleshpur", "state":"Karnataka"},
      {"city":"Sandur", "state":"Karnataka"},
      {"city":"Sankeshwar", "state":"Karnataka"},
      {"city":"Saundatti-Yellamma", "state":"Karnataka"},
      {"city":"Savanur", "state":"Karnataka"},
      {"city":"Sedam", "state":"Karnataka"},
      {"city":"Shahabad", "state":"Karnataka"},
      {"city":"Shahpur", "state":"Karnataka"},
      {"city":"Shiggaon", "state":"Karnataka"},
      {"city":"Shikapur", "state":"Karnataka"},
      {"city":"Shimoga", "state":"Karnataka"},
      {"city":"Shorapur", "state":"Karnataka"},
      {"city":"Shrirangapattana", "state":"Karnataka"},
      {"city":"Sidlaghatta", "state":"Karnataka"},
      {"city":"Sindgi", "state":"Karnataka"},
      {"city":"Sindhnur", "state":"Karnataka"},
      {"city":"Sira", "state":"Karnataka"},
      {"city":"Sirsi", "state":"Karnataka"},
      {"city":"Siruguppa", "state":"Karnataka"},
      {"city":"Srinivaspur", "state":"Karnataka"},
      {"city":"Talikota", "state":"Karnataka"},
      {"city":"Tarikere", "state":"Karnataka"},
      {"city":"Tekkalakota", "state":"Karnataka"},
      {"city":"Terdal", "state":"Karnataka"},
      {"city":"Tiptur", "state":"Karnataka"},
      {"city":"Tumkur", "state":"Karnataka"},
      {"city":"Udupi", "state":"Karnataka"},
      {"city":"Vijayapura", "state":"Karnataka"},
      {"city":"Wadi", "state":"Karnataka"},
      {"city":"Yadgir", "state":"Karnataka"},
      {"city":"Adoor", "state":"Kerala"},
      {"city":"Akathiyoor", "state":"Kerala"},
      {"city":"Alappuzha", "state":"Kerala"},
      {"city":"Ancharakandy", "state":"Kerala"},
      {"city":"Aroor", "state":"Kerala"},
      {"city":"Ashtamichira", "state":"Kerala"},
      {"city":"Attingal", "state":"Kerala"},
      {"city":"Avinissery", "state":"Kerala"},
      {"city":"Chalakudy", "state":"Kerala"},
      {"city":"Changanassery", "state":"Kerala"},
      {"city":"Chendamangalam", "state":"Kerala"},
      {"city":"Chengannur", "state":"Kerala"},
      {"city":"Cherthala", "state":"Kerala"},
      {"city":"Cheruthazham", "state":"Kerala"},
      {"city":"Chittur-Thathamangalam", "state":"Kerala"},
      {"city":"Chockli", "state":"Kerala"},
      {"city":"Erattupetta", "state":"Kerala"},
      {"city":"Guruvayoor", "state":"Kerala"},
      {"city":"Irinjalakuda", "state":"Kerala"},
      {"city":"Kadirur", "state":"Kerala"},
      {"city":"Kalliasseri", "state":"Kerala"},
      {"city":"Kalpetta", "state":"Kerala"},
      {"city":"Kanhangad", "state":"Kerala"},
      {"city":"Kanjikkuzhi", "state":"Kerala"},
      {"city":"Kannur", "state":"Kerala"},
      {"city":"Kasaragod", "state":"Kerala"},
      {"city":"Kayamkulam", "state":"Kerala"},
      {"city":"Kochi", "state":"Kerala"},
      {"city":"Kodungallur", "state":"Kerala"},
      {"city":"Kollam", "state":"Kerala"},
      {"city":"Koothuparamba", "state":"Kerala"},
      {"city":"Kothamangalam", "state":"Kerala"},
      {"city":"Kottayam", "state":"Kerala"},
      {"city":"Kozhikode", "state":"Kerala"},
      {"city":"Kunnamkulam", "state":"Kerala"},
      {"city":"Malappuram", "state":"Kerala"},
      {"city":"Mattannur", "state":"Kerala"},
      {"city":"Mavelikkara", "state":"Kerala"},
      {"city":"Mavoor", "state":"Kerala"},
      {"city":"Muvattupuzha", "state":"Kerala"},
      {"city":"Nedumangad", "state":"Kerala"},
      {"city":"Neyyattinkara", "state":"Kerala"},
      {"city":"Ottappalam", "state":"Kerala"},
      {"city":"Palai", "state":"Kerala"},
      {"city":"Palakkad", "state":"Kerala"},
      {"city":"Panniyannur", "state":"Kerala"},
      {"city":"Pappinisseri", "state":"Kerala"},
      {"city":"Paravoor", "state":"Kerala"},
      {"city":"Pathanamthitta", "state":"Kerala"},
      {"city":"Payyannur", "state":"Kerala"},
      {"city":"Peringathur", "state":"Kerala"},
      {"city":"Perinthalmanna", "state":"Kerala"},
      {"city":"Perumbavoor", "state":"Kerala"},
      {"city":"Ponnani", "state":"Kerala"},
      {"city":"Punalur", "state":"Kerala"},
      {"city":"Quilandy", "state":"Kerala"},
      {"city":"Shoranur", "state":"Kerala"},
      {"city":"Taliparamba", "state":"Kerala"},
      {"city":"Thiruvalla", "state":"Kerala"},
      {"city":"Thiruvananthapuram", "state":"Kerala"},
      {"city":"Thodupuzha", "state":"Kerala"},
      {"city":"Thrissur", "state":"Kerala"},
      {"city":"Tirur", "state":"Kerala"},
      {"city":"Vadakara", "state":"Kerala"},
      {"city":"Vaikom", "state":"Kerala"},
      {"city":"Varkala", "state":"Kerala"},
      {"city":"Kavaratti", "state":"Lakshadweep"},
      {"city":"Ashok Nagar", "state":"Madhya Pradesh"},
      {"city":"Balaghat", "state":"Madhya Pradesh"},
      {"city":"Betul", "state":"Madhya Pradesh"},
      {"city":"Bhopal", "state":"Madhya Pradesh"},
      {"city":"Burhanpur", "state":"Madhya Pradesh"},
      {"city":"Chhatarpur", "state":"Madhya Pradesh"},
      {"city":"Dabra", "state":"Madhya Pradesh"},
      {"city":"Datia", "state":"Madhya Pradesh"},
      {"city":"Dewas", "state":"Madhya Pradesh"},
      {"city":"Dhar", "state":"Madhya Pradesh"},
      {"city":"Fatehabad", "state":"Madhya Pradesh"},
      {"city":"Gwalior", "state":"Madhya Pradesh"},
      {"city":"Indore", "state":"Madhya Pradesh"},
      {"city":"Itarsi", "state":"Madhya Pradesh"},
      {"city":"Jabalpur", "state":"Madhya Pradesh"},
      {"city":"Katni", "state":"Madhya Pradesh"},
      {"city":"Kotma", "state":"Madhya Pradesh"},
      {"city":"Lahar", "state":"Madhya Pradesh"},
      {"city":"Lundi", "state":"Madhya Pradesh"},
      {"city":"Maharajpur", "state":"Madhya Pradesh"},
      {"city":"Mahidpur", "state":"Madhya Pradesh"},
      {"city":"Maihar", "state":"Madhya Pradesh"},
      {"city":"Malajkhand", "state":"Madhya Pradesh"},
      {"city":"Manasa", "state":"Madhya Pradesh"},
      {"city":"Manawar", "state":"Madhya Pradesh"},
      {"city":"Mandideep", "state":"Madhya Pradesh"},
      {"city":"Mandla", "state":"Madhya Pradesh"},
      {"city":"Mandsaur", "state":"Madhya Pradesh"},
      {"city":"Mauganj", "state":"Madhya Pradesh"},
      {"city":"Mhow Cantonment", "state":"Madhya Pradesh"},
      {"city":"Mhowgaon", "state":"Madhya Pradesh"},
      {"city":"Morena", "state":"Madhya Pradesh"},
      {"city":"Multai", "state":"Madhya Pradesh"},
      {"city":"Murwara", "state":"Madhya Pradesh"},
      {"city":"Nagda", "state":"Madhya Pradesh"},
      {"city":"Nainpur", "state":"Madhya Pradesh"},
      {"city":"Narsinghgarh", "state":"Madhya Pradesh"},
      {"city":"Narsinghgarh", "state":"Madhya Pradesh"},
      {"city":"Neemuch", "state":"Madhya Pradesh"},
      {"city":"Nepanagar", "state":"Madhya Pradesh"},
      {"city":"Niwari", "state":"Madhya Pradesh"},
      {"city":"Nowgong", "state":"Madhya Pradesh"},
      {"city":"Nowrozabad", "state":"Madhya Pradesh"},
      {"city":"Pachore", "state":"Madhya Pradesh"},
      {"city":"Pali", "state":"Madhya Pradesh"},
      {"city":"Panagar", "state":"Madhya Pradesh"},
      {"city":"Pandhurna", "state":"Madhya Pradesh"},
      {"city":"Panna", "state":"Madhya Pradesh"},
      {"city":"Pasan", "state":"Madhya Pradesh"},
      {"city":"Pipariya", "state":"Madhya Pradesh"},
      {"city":"Pithampur", "state":"Madhya Pradesh"},
      {"city":"Porsa", "state":"Madhya Pradesh"},
      {"city":"Prithvipur", "state":"Madhya Pradesh"},
      {"city":"Raghogarh-Vijaypur", "state":"Madhya Pradesh"},
      {"city":"Rahatgarh", "state":"Madhya Pradesh"},
      {"city":"Raisen", "state":"Madhya Pradesh"},
      {"city":"Rajgarh", "state":"Madhya Pradesh"},
      {"city":"Ratlam", "state":"Madhya Pradesh"},
      {"city":"Rau", "state":"Madhya Pradesh"},
      {"city":"Rehli", "state":"Madhya Pradesh"},
      {"city":"Rewa", "state":"Madhya Pradesh"},
      {"city":"Sabalgarh", "state":"Madhya Pradesh"},
      {"city":"Sagar", "state":"Madhya Pradesh"},
      {"city":"Sanawad", "state":"Madhya Pradesh"},
      {"city":"Sarangpur", "state":"Madhya Pradesh"},
      {"city":"Sarni", "state":"Madhya Pradesh"},
      {"city":"Satna", "state":"Madhya Pradesh"},
      {"city":"Sausar", "state":"Madhya Pradesh"},
      {"city":"Sehore", "state":"Madhya Pradesh"},
      {"city":"Sendhwa", "state":"Madhya Pradesh"},
      {"city":"Seoni", "state":"Madhya Pradesh"},
      {"city":"Seoni-Malwa", "state":"Madhya Pradesh"},
      {"city":"Shahdol", "state":"Madhya Pradesh"},
      {"city":"Shajapur", "state":"Madhya Pradesh"},
      {"city":"Shamgarh", "state":"Madhya Pradesh"},
      {"city":"Sheopur", "state":"Madhya Pradesh"},
      {"city":"Shivpuri", "state":"Madhya Pradesh"},
      {"city":"Shujalpur", "state":"Madhya Pradesh"},
      {"city":"Sidhi", "state":"Madhya Pradesh"},
      {"city":"Sihora", "state":"Madhya Pradesh"},
      {"city":"Singrauli", "state":"Madhya Pradesh"},
      {"city":"Sironj", "state":"Madhya Pradesh"},
      {"city":"Sohagpur", "state":"Madhya Pradesh"},
      {"city":"Tarana", "state":"Madhya Pradesh"},
      {"city":"Tikamgarh", "state":"Madhya Pradesh"},
      {"city":"Ujhani", "state":"Madhya Pradesh"},
      {"city":"Ujjain", "state":"Madhya Pradesh"},
      {"city":"Umaria", "state":"Madhya Pradesh"},
      {"city":"Vidisha", "state":"Madhya Pradesh"},
      {"city":"Wara Seoni", "state":"Madhya Pradesh"},
      {"city":"Ahmednagar", "state":"Maharashtra"},
      {"city":"Akola", "state":"Maharashtra"},
      {"city":"Amravati", "state":"Maharashtra"},
      {"city":"Aurangabad", "state":"Maharashtra"},
      {"city":"Baramati", "state":"Maharashtra"},
      {"city":"Chalisgaon", "state":"Maharashtra"},
      {"city":"Chinchani", "state":"Maharashtra"},
      {"city":"Devgarh", "state":"Maharashtra"},
      {"city":"Dhule", "state":"Maharashtra"},
      {"city":"Dombivli", "state":"Maharashtra"},
      {"city":"Durgapur", "state":"Maharashtra"},
      {"city":"Ichalkaranji", "state":"Maharashtra"},
      {"city":"Jalna", "state":"Maharashtra"},
      {"city":"Kalyan", "state":"Maharashtra"},
      {"city":"Latur", "state":"Maharashtra"},
      {"city":"Loha", "state":"Maharashtra"},
      {"city":"Lonar", "state":"Maharashtra"},
      {"city":"Lonavla", "state":"Maharashtra"},
      {"city":"Mahad", "state":"Maharashtra"},
      {"city":"Mahuli", "state":"Maharashtra"},
      {"city":"Malegaon", "state":"Maharashtra"},
      {"city":"Malkapur", "state":"Maharashtra"},
      {"city":"Manchar", "state":"Maharashtra"},
      {"city":"Mangalvedhe", "state":"Maharashtra"},
      {"city":"Mangrulpir", "state":"Maharashtra"},
      {"city":"Manjlegaon", "state":"Maharashtra"},
      {"city":"Manmad", "state":"Maharashtra"},
      {"city":"Manwath", "state":"Maharashtra"},
      {"city":"Mehkar", "state":"Maharashtra"},
      {"city":"Mhaswad", "state":"Maharashtra"},
      {"city":"Miraj", "state":"Maharashtra"},
      {"city":"Morshi", "state":"Maharashtra"},
      {"city":"Mukhed", "state":"Maharashtra"},
      {"city":"Mul", "state":"Maharashtra"},
      {"city":"Mumbai", "state":"Maharashtra"},
      {"city":"Murtijapur", "state":"Maharashtra"},
      {"city":"Nagpur", "state":"Maharashtra"},
      {"city":"Nalasopara", "state":"Maharashtra"},
      {"city":"Nanded-Waghala", "state":"Maharashtra"},
      {"city":"Nandgaon", "state":"Maharashtra"},
      {"city":"Nandura", "state":"Maharashtra"},
      {"city":"Nandurbar", "state":"Maharashtra"},
      {"city":"Narkhed", "state":"Maharashtra"},
      {"city":"Nashik", "state":"Maharashtra"},
      {"city":"Navi Mumbai", "state":"Maharashtra"},
      {"city":"Nawapur", "state":"Maharashtra"},
      {"city":"Nilanga", "state":"Maharashtra"},
      {"city":"Osmanabad", "state":"Maharashtra"},
      {"city":"Ozar", "state":"Maharashtra"},
      {"city":"Pachora", "state":"Maharashtra"},
      {"city":"Paithan", "state":"Maharashtra"},
      {"city":"Palghar", "state":"Maharashtra"},
      {"city":"Pandharkaoda", "state":"Maharashtra"},
      {"city":"Pandharpur", "state":"Maharashtra"},
      {"city":"Panvel", "state":"Maharashtra"},
      {"city":"Parbhani", "state":"Maharashtra"},
      {"city":"Parli", "state":"Maharashtra"},
      {"city":"Parola", "state":"Maharashtra"},
      {"city":"Partur", "state":"Maharashtra"},
      {"city":"Pathardi", "state":"Maharashtra"},
      {"city":"Pathri", "state":"Maharashtra"},
      {"city":"Patur", "state":"Maharashtra"},
      {"city":"Pauni", "state":"Maharashtra"},
      {"city":"Pen", "state":"Maharashtra"},
      {"city":"Phaltan", "state":"Maharashtra"},
      {"city":"Pulgaon", "state":"Maharashtra"},
      {"city":"Pune", "state":"Maharashtra"},
      {"city":"Purna", "state":"Maharashtra"},
      {"city":"Pusad", "state":"Maharashtra"},
      {"city":"Rahuri", "state":"Maharashtra"},
      {"city":"Rajura", "state":"Maharashtra"},
      {"city":"Ramtek", "state":"Maharashtra"},
      {"city":"Ratnagiri", "state":"Maharashtra"},
      {"city":"Raver", "state":"Maharashtra"},
      {"city":"Risod", "state":"Maharashtra"},
      {"city":"Sailu", "state":"Maharashtra"},
      {"city":"Sangamner", "state":"Maharashtra"},
      {"city":"Sangli", "state":"Maharashtra"},
      {"city":"Sangole", "state":"Maharashtra"},
      {"city":"Sasvad", "state":"Maharashtra"},
      {"city":"Satana", "state":"Maharashtra"},
      {"city":"Satara", "state":"Maharashtra"},
      {"city":"Savner", "state":"Maharashtra"},
      {"city":"Sawantwadi", "state":"Maharashtra"},
      {"city":"Shahade", "state":"Maharashtra"},
      {"city":"Shegaon", "state":"Maharashtra"},
      {"city":"Shendurjana", "state":"Maharashtra"},
      {"city":"Shirdi", "state":"Maharashtra"},
      {"city":"Shirpur-Warwade", "state":"Maharashtra"},
      {"city":"Shirur", "state":"Maharashtra"},
      {"city":"Shrigonda", "state":"Maharashtra"},
      {"city":"Shrirampur", "state":"Maharashtra"},
      {"city":"Sillod", "state":"Maharashtra"},
      {"city":"Sinnar", "state":"Maharashtra"},
      {"city":"Solapur", "state":"Maharashtra"},
      {"city":"Soyagaon", "state":"Maharashtra"},
      {"city":"Talegaon Dabhade", "state":"Maharashtra"},
      {"city":"Talode", "state":"Maharashtra"},
      {"city":"Tasgaon", "state":"Maharashtra"},
      {"city":"Tirora", "state":"Maharashtra"},
      {"city":"Tuljapur", "state":"Maharashtra"},
      {"city":"Tumsar", "state":"Maharashtra"},
      {"city":"Uran", "state":"Maharashtra"},
      {"city":"Uran Islampur", "state":"Maharashtra"},
      {"city":"Wadgaon Road", "state":"Maharashtra"},
      {"city":"Wai", "state":"Maharashtra"},
      {"city":"Wani", "state":"Maharashtra"},
      {"city":"Wardha", "state":"Maharashtra"},
      {"city":"Warora", "state":"Maharashtra"},
      {"city":"Warud", "state":"Maharashtra"},
      {"city":"Washim", "state":"Maharashtra"},
      {"city":"Yevla", "state":"Maharashtra"},
      {"city":"Uchgaon", "state":"Maharashtra"},
      {"city":"Udgir", "state":"Maharashtra"},
      {"city":"Umarga", "state":"Maharastra"},
      {"city":"Umarkhed", "state":"Maharastra"},
      {"city":"Umred", "state":"Maharastra"},
      {"city":"Vadgaon Kasba", "state":"Maharastra"},
      {"city":"Vaijapur", "state":"Maharastra"},
      {"city":"Vasai", "state":"Maharastra"},
      {"city":"Virar", "state":"Maharastra"},
      {"city":"Vita", "state":"Maharastra"},
      {"city":"Yavatmal", "state":"Maharastra"},
      {"city":"Yawal", "state":"Maharastra"},
      {"city":"Imphal", "state":"Manipur"},
      {"city":"Kakching", "state":"Manipur"},
      {"city":"Lilong", "state":"Manipur"},
      {"city":"Mayang Imphal", "state":"Manipur"},
      {"city":"Thoubal", "state":"Manipur"},
      {"city":"Jowai", "state":"Meghalaya"},
      {"city":"Nongstoin", "state":"Meghalaya"},
      {"city":"Shillong", "state":"Meghalaya"},
      {"city":"Tura", "state":"Meghalaya"},
      {"city":"Aizawl", "state":"Mizoram"},
      {"city":"Champhai", "state":"Mizoram"},
      {"city":"Lunglei", "state":"Mizoram"},
      {"city":"Saiha", "state":"Mizoram"},
      {"city":"Dimapur", "state":"Nagaland"},
      {"city":"Kohima", "state":"Nagaland"},
      {"city":"Mokokchung", "state":"Nagaland"},
      {"city":"Tuensang", "state":"Nagaland"},
      {"city":"Wokha", "state":"Nagaland"},
      {"city":"Zunheboto", "state":"Nagaland"},
      {"city":"Anandapur", "state":"Orissa"},
      {"city":"Anugul", "state":"Orissa"},
      {"city":"Asika", "state":"Orissa"},
      {"city":"Balangir", "state":"Orissa"},
      {"city":"Balasore", "state":"Orissa"},
      {"city":"Baleshwar", "state":"Orissa"},
      {"city":"Bamra", "state":"Orissa"},
      {"city":"Barbil", "state":"Orissa"},
      {"city":"Bargarh", "state":"Orissa"},
      {"city":"Bargarh", "state":"Orissa"},
      {"city":"Baripada", "state":"Orissa"},
      {"city":"Basudebpur", "state":"Orissa"},
      {"city":"Belpahar", "state":"Orissa"},
      {"city":"Bhadrak", "state":"Orissa"},
      {"city":"Bhawanipatna", "state":"Orissa"},
      {"city":"Bhuban", "state":"Orissa"},
      {"city":"Bhubaneswar", "state":"Orissa"},
      {"city":"Biramitrapur", "state":"Orissa"},
      {"city":"Brahmapur", "state":"Orissa"},
      {"city":"Brajrajnagar", "state":"Orissa"},
      {"city":"Byasanagar", "state":"Orissa"},
      {"city":"Cuttack", "state":"Orissa"},
      {"city":"Debagarh", "state":"Orissa"},
      {"city":"Dhenkanal", "state":"Orissa"},
      {"city":"Gunupur", "state":"Orissa"},
      {"city":"Hinjilicut", "state":"Orissa"},
      {"city":"Jagatsinghapur", "state":"Orissa"},
      {"city":"Jajapur", "state":"Orissa"},
      {"city":"Jaleswar", "state":"Orissa"},
      {"city":"Jatani", "state":"Orissa"},
      {"city":"Jeypur", "state":"Orissa"},
      {"city":"Jharsuguda", "state":"Orissa"},
      {"city":"Joda", "state":"Orissa"},
      {"city":"Kantabanji", "state":"Orissa"},
      {"city":"Karanjia", "state":"Orissa"},
      {"city":"Kendrapara", "state":"Orissa"},
      {"city":"Kendujhar", "state":"Orissa"},
      {"city":"Khordha", "state":"Orissa"},
      {"city":"Koraput", "state":"Orissa"},
      {"city":"Malkangiri", "state":"Orissa"},
      {"city":"Nabarangapur", "state":"Orissa"},
      {"city":"Paradip", "state":"Orissa"},
      {"city":"Parlakhemundi", "state":"Orissa"},
      {"city":"Pattamundai", "state":"Orissa"},
      {"city":"Phulabani", "state":"Orissa"},
      {"city":"Puri", "state":"Orissa"},
      {"city":"Rairangpur", "state":"Orissa"},
      {"city":"Rajagangapur", "state":"Orissa"},
      {"city":"Raurkela", "state":"Orissa"},
      {"city":"Rayagada", "state":"Orissa"},
      {"city":"Sambalpur", "state":"Orissa"},
      {"city":"Soro", "state":"Orissa"},
      {"city":"Sunabeda", "state":"Orissa"},
      {"city":"Sundargarh", "state":"Orissa"},
      {"city":"Talcher", "state":"Orissa"},
      {"city":"Titlagarh", "state":"Orissa"},
      {"city":"Umarkote", "state":"Orissa"},
      {"city":"Karaikal", "state":"Pondicherry"},
      {"city":"Mahe", "state":"Pondicherry"},
      {"city":"Pondicherry", "state":"Pondicherry"},
      {"city":"Yanam", "state":"Pondicherry"},
      {"city":"Ahmedgarh", "state":"Punjab"},
      {"city":"Amritsar", "state":"Punjab"},
      {"city":"Barnala", "state":"Punjab"},
      {"city":"Batala", "state":"Punjab"},
      {"city":"Bathinda", "state":"Punjab"},
      {"city":"Bhagha Purana", "state":"Punjab"},
      {"city":"Budhlada", "state":"Punjab"},
      {"city":"Chandigarh", "state":"Punjab"},
      {"city":"Dasua", "state":"Punjab"},
      {"city":"Dhuri", "state":"Punjab"},
      {"city":"Dinanagar", "state":"Punjab"},
      {"city":"Faridkot", "state":"Punjab"},
      {"city":"Fazilka", "state":"Punjab"},
      {"city":"Firozpur", "state":"Punjab"},
      {"city":"Firozpur Cantt.", "state":"Punjab"},
      {"city":"Giddarbaha", "state":"Punjab"},
      {"city":"Gobindgarh", "state":"Punjab"},
      {"city":"Gurdaspur", "state":"Punjab"},
      {"city":"Hoshiarpur", "state":"Punjab"},
      {"city":"Jagraon", "state":"Punjab"},
      {"city":"Jaitu", "state":"Punjab"},
      {"city":"Jalalabad", "state":"Punjab"},
      {"city":"Jalandhar", "state":"Punjab"},
      {"city":"Jalandhar Cantt.", "state":"Punjab"},
      {"city":"Jandiala", "state":"Punjab"},
      {"city":"Kapurthala", "state":"Punjab"},
      {"city":"Karoran", "state":"Punjab"},
      {"city":"Kartarpur", "state":"Punjab"},
      {"city":"Khanna", "state":"Punjab"},
      {"city":"Kharar", "state":"Punjab"},
      {"city":"Kot Kapura", "state":"Punjab"},
      {"city":"Kurali", "state":"Punjab"},
      {"city":"Longowal", "state":"Punjab"},
      {"city":"Ludhiana", "state":"Punjab"},
      {"city":"Malerkotla", "state":"Punjab"},
      {"city":"Malout", "state":"Punjab"},
      {"city":"Mansa", "state":"Punjab"},
      {"city":"Maur", "state":"Punjab"},
      {"city":"Moga", "state":"Punjab"},
      {"city":"Mohali", "state":"Punjab"},
      {"city":"Morinda", "state":"Punjab"},
      {"city":"Mukerian", "state":"Punjab"},
      {"city":"Muktsar", "state":"Punjab"},
      {"city":"Nabha", "state":"Punjab"},
      {"city":"Nakodar", "state":"Punjab"},
      {"city":"Nangal", "state":"Punjab"},
      {"city":"Nawanshahr", "state":"Punjab"},
      {"city":"Pathankot", "state":"Punjab"},
      {"city":"Patiala", "state":"Punjab"},
      {"city":"Patran", "state":"Punjab"},
      {"city":"Patti", "state":"Punjab"},
      {"city":"Phagwara", "state":"Punjab"},
      {"city":"Phillaur", "state":"Punjab"},
      {"city":"Qadian", "state":"Punjab"},
      {"city":"Raikot", "state":"Punjab"},
      {"city":"Rajpura", "state":"Punjab"},
      {"city":"Rampura Phul", "state":"Punjab"},
      {"city":"Rupnagar", "state":"Punjab"},
      {"city":"Samana", "state":"Punjab"},
      {"city":"Sangrur", "state":"Punjab"},
      {"city":"Sirhind Fatehgarh Sahib", "state":"Punjab"},
      {"city":"Sujanpur", "state":"Punjab"},
      {"city":"Sunam", "state":"Punjab"},
      {"city":"Talwara", "state":"Punjab"},
      {"city":"Tarn Taran", "state":"Punjab"},
      {"city":"Urmar Tanda", "state":"Punjab"},
      {"city":"Zira", "state":"Punjab"},
      {"city":"Zirakpur", "state":"Punjab"},
      {"city":"Bali", "state":"Rajasthan"},
      {"city":"Banswara", "state":"Rajastan"},
      {"city":"Ajmer", "state":"Rajasthan"},
      {"city":"Alwar", "state":"Rajasthan"},
      {"city":"Bandikui", "state":"Rajasthan"},
      {"city":"Baran", "state":"Rajasthan"},
      {"city":"Barmer", "state":"Rajasthan"},
      {"city":"Bikaner", "state":"Rajasthan"},
      {"city":"Fatehpur", "state":"Rajasthan"},
      {"city":"Jaipur", "state":"Rajasthan"},
      {"city":"Jaisalmer", "state":"Rajasthan"},
      {"city":"Jodhpur", "state":"Rajasthan"},
      {"city":"Kota", "state":"Rajasthan"},
      {"city":"Lachhmangarh", "state":"Rajasthan"},
      {"city":"Ladnu", "state":"Rajasthan"},
      {"city":"Lakheri", "state":"Rajasthan"},
      {"city":"Lalsot", "state":"Rajasthan"},
      {"city":"Losal", "state":"Rajasthan"},
      {"city":"Makrana", "state":"Rajasthan"},
      {"city":"Malpura", "state":"Rajasthan"},
      {"city":"Mandalgarh", "state":"Rajasthan"},
      {"city":"Mandawa", "state":"Rajasthan"},
      {"city":"Mangrol", "state":"Rajasthan"},
      {"city":"Merta city", "state":"Rajasthan"},
      {"city":"Mount Abu", "state":"Rajasthan"},
      {"city":"Nadbai", "state":"Rajasthan"},
      {"city":"Nagar", "state":"Rajasthan"},
      {"city":"Nagaur", "state":"Rajasthan"},
      {"city":"Nargund", "state":"Rajasthan"},
      {"city":"Nasirabad", "state":"Rajasthan"},
      {"city":"Nathdwara", "state":"Rajasthan"},
      {"city":"Navalgund", "state":"Rajasthan"},
      {"city":"Nawalgarh", "state":"Rajasthan"},
      {"city":"Neem-Ka-Thana", "state":"Rajasthan"},
      {"city":"Nelamangala", "state":"Rajasthan"},
      {"city":"Nimbahera", "state":"Rajasthan"},
      {"city":"Nipani", "state":"Rajasthan"},
      {"city":"Niwai", "state":"Rajasthan"},
      {"city":"Nohar", "state":"Rajasthan"},
      {"city":"Nokha", "state":"Rajasthan"},
      {"city":"Pali", "state":"Rajasthan"},
      {"city":"Phalodi", "state":"Rajasthan"},
      {"city":"Phulera", "state":"Rajasthan"},
      {"city":"Pilani", "state":"Rajasthan"},
      {"city":"Pilibanga", "state":"Rajasthan"},
      {"city":"Pindwara", "state":"Rajasthan"},
      {"city":"Pipar city", "state":"Rajasthan"},
      {"city":"Prantij", "state":"Rajasthan"},
      {"city":"Pratapgarh", "state":"Rajasthan"},
      {"city":"Raisinghnagar", "state":"Rajasthan"},
      {"city":"Rajakhera", "state":"Rajasthan"},
      {"city":"Rajaldesar", "state":"Rajasthan"},
      {"city":"Rajgarh (Alwar)", "state":"Rajasthan"},
      {"city":"Rajgarh (Churu", "state":"Rajasthan"},
      {"city":"Rajsamand", "state":"Rajasthan"},
      {"city":"Ramganj Mandi", "state":"Rajasthan"},
      {"city":"Ramngarh", "state":"Rajasthan"},
      {"city":"Ratangarh", "state":"Rajasthan"},
      {"city":"Rawatbhata", "state":"Rajasthan"},
      {"city":"Rawatsar", "state":"Rajasthan"},
      {"city":"Reengus", "state":"Rajasthan"},
      {"city":"Sadri", "state":"Rajasthan"},
      {"city":"Sadulshahar", "state":"Rajasthan"},
      {"city":"Sagwara", "state":"Rajasthan"},
      {"city":"Sambhar", "state":"Rajasthan"},
      {"city":"Sanchore", "state":"Rajasthan"},
      {"city":"Sangaria", "state":"Rajasthan"},
      {"city":"Sardarshahar", "state":"Rajasthan"},
      {"city":"Sawai Madhopur", "state":"Rajasthan"},
      {"city":"Shahpura", "state":"Rajasthan"},
      {"city":"Shahpura", "state":"Rajasthan"},
      {"city":"Sheoganj", "state":"Rajasthan"},
      {"city":"Sikar", "state":"Rajasthan"},
      {"city":"Sirohi", "state":"Rajasthan"},
      {"city":"Sojat", "state":"Rajasthan"},
      {"city":"Sri Madhopur", "state":"Rajasthan"},
      {"city":"Sujangarh", "state":"Rajasthan"},
      {"city":"Sumerpur", "state":"Rajasthan"},
      {"city":"Suratgarh", "state":"Rajasthan"},
      {"city":"Taranagar", "state":"Rajasthan"},
      {"city":"Todabhim", "state":"Rajasthan"},
      {"city":"Todaraisingh", "state":"Rajasthan"},
      {"city":"Tonk", "state":"Rajasthan"},
      {"city":"Udaipur", "state":"Rajasthan"},
      {"city":"Udaipurwati", "state":"Rajasthan"},
      {"city":"Vijainagar", "state":"Rajasthan"},
      {"city":"Gangtok", "state":"Sikkim"},
      {"city":"Calcutta", "state":"West Bengal"},
      {"city":"Arakkonam", "state":"Tamil Nadu"},
      {"city":"Arcot", "state":"Tamil Nadu"},
      {"city":"Aruppukkottai", "state":"Tamil Nadu"},
      {"city":"Bhavani", "state":"Tamil Nadu"},
      {"city":"Chengalpattu", "state":"Tamil Nadu"},
      {"city":"Chennai", "state":"Tamil Nadu"},
      {"city":"Chinna salem", "state":"Tamil nadu"},
      {"city":"Coimbatore", "state":"Tamil Nadu"},
      {"city":"Coonoor", "state":"Tamil Nadu"},
      {"city":"Cuddalore", "state":"Tamil Nadu"},
      {"city":"Dharmapuri", "state":"Tamil Nadu"},
      {"city":"Dindigul", "state":"Tamil Nadu"},
      {"city":"Erode", "state":"Tamil Nadu"},
      {"city":"Gudalur", "state":"Tamil Nadu"},
      {"city":"Gudalur", "state":"Tamil Nadu"},
      {"city":"Gudalur", "state":"Tamil Nadu"},
      {"city":"Kanchipuram", "state":"Tamil Nadu"},
      {"city":"Karaikudi", "state":"Tamil Nadu"},
      {"city":"Karungal", "state":"Tamil Nadu"},
      {"city":"Karur", "state":"Tamil Nadu"},
      {"city":"Kollankodu", "state":"Tamil Nadu"},
      {"city":"Lalgudi", "state":"Tamil Nadu"},
      {"city":"Madurai", "state":"Tamil Nadu"},
      {"city":"Nagapattinam", "state":"Tamil Nadu"},
      {"city":"Nagercoil", "state":"Tamil Nadu"},
      {"city":"Namagiripettai", "state":"Tamil Nadu"},
      {"city":"Namakkal", "state":"Tamil Nadu"},
      {"city":"Nandivaram-Guduvancheri", "state":"Tamil Nadu"},
      {"city":"Nanjikottai", "state":"Tamil Nadu"},
      {"city":"Natham", "state":"Tamil Nadu"},
      {"city":"Nellikuppam", "state":"Tamil Nadu"},
      {"city":"Neyveli", "state":"Tamil Nadu"},
      {"city":"O Valley", "state":"Tamil Nadu"},
      {"city":"Oddanchatram", "state":"Tamil Nadu"},
      {"city":"P.N.Patti", "state":"Tamil Nadu"},
      {"city":"Pacode", "state":"Tamil Nadu"},
      {"city":"Padmanabhapuram", "state":"Tamil Nadu"},
      {"city":"Palani", "state":"Tamil Nadu"},
      {"city":"Palladam", "state":"Tamil Nadu"},
      {"city":"Pallapatti", "state":"Tamil Nadu"},
      {"city":"Pallikonda", "state":"Tamil Nadu"},
      {"city":"Panagudi", "state":"Tamil Nadu"},
      {"city":"Panruti", "state":"Tamil Nadu"},
      {"city":"Paramakudi", "state":"Tamil Nadu"},
      {"city":"Parangipettai", "state":"Tamil Nadu"},
      {"city":"Pattukkottai", "state":"Tamil Nadu"},
      {"city":"Perambalur", "state":"Tamil Nadu"},
      {"city":"Peravurani", "state":"Tamil Nadu"},
      {"city":"Periyakulam", "state":"Tamil Nadu"},
      {"city":"Periyasemur", "state":"Tamil Nadu"},
      {"city":"Pernampattu", "state":"Tamil Nadu"},
      {"city":"Pollachi", "state":"Tamil Nadu"},
      {"city":"Polur", "state":"Tamil Nadu"},
      {"city":"Ponneri", "state":"Tamil Nadu"},
      {"city":"Pudukkottai", "state":"Tamil Nadu"},
      {"city":"Pudupattinam", "state":"Tamil Nadu"},
      {"city":"Puliyankudi", "state":"Tamil Nadu"},
      {"city":"Punjaipugalur", "state":"Tamil Nadu"},
      {"city":"Rajapalayam", "state":"Tamil Nadu"},
      {"city":"Ramanathapuram", "state":"Tamil Nadu"},
      {"city":"Rameshwaram", "state":"Tamil Nadu"},
      {"city":"Rasipuram", "state":"Tamil Nadu"},
      {"city":"Salem", "state":"Tamil Nadu"},
      {"city":"Sankarankoil", "state":"Tamil Nadu"},
      {"city":"Sankari", "state":"Tamil Nadu"},
      {"city":"Sathyamangalam", "state":"Tamil Nadu"},
      {"city":"Sattur", "state":"Tamil Nadu"},
      {"city":"Shenkottai", "state":"Tamil Nadu"},
      {"city":"Sholavandan", "state":"Tamil Nadu"},
      {"city":"Sholingur", "state":"Tamil Nadu"},
      {"city":"Sirkali", "state":"Tamil Nadu"},
      {"city":"Sivaganga", "state":"Tamil Nadu"},
      {"city":"Sivagiri", "state":"Tamil Nadu"},
      {"city":"Sivakasi", "state":"Tamil Nadu"},
      {"city":"Srivilliputhur", "state":"Tamil Nadu"},
      {"city":"Surandai", "state":"Tamil Nadu"},
      {"city":"Suriyampalayam", "state":"Tamil Nadu"},
      {"city":"Tenkasi", "state":"Tamil Nadu"},
      {"city":"Thammampatti", "state":"Tamil Nadu"},
      {"city":"Thanjavur", "state":"Tamil Nadu"},
      {"city":"Tharamangalam", "state":"Tamil Nadu"},
      {"city":"Tharangambadi", "state":"Tamil Nadu"},
      {"city":"Theni Allinagaram", "state":"Tamil Nadu"},
      {"city":"Thirumangalam", "state":"Tamil Nadu"},
      {"city":"Thirunindravur", "state":"Tamil Nadu"},
      {"city":"Thiruparappu", "state":"Tamil Nadu"},
      {"city":"Thirupuvanam", "state":"Tamil Nadu"},
      {"city":"Thiruthuraipoondi", "state":"Tamil Nadu"},
      {"city":"Thiruvallur", "state":"Tamil Nadu"},
      {"city":"Thiruvarur", "state":"Tamil Nadu"},
      {"city":"Thoothukudi", "state":"Tamil Nadu"},
      {"city":"Thuraiyur", "state":"Tamil Nadu"},
      {"city":"Tindivanam", "state":"Tamil Nadu"},
      {"city":"Tiruchendur", "state":"Tamil Nadu"},
      {"city":"Tiruchengode", "state":"Tamil Nadu"},
      {"city":"Tiruchirappalli", "state":"Tamil Nadu"},
      {"city":"Tirukalukundram", "state":"Tamil Nadu"},
      {"city":"Tirukkoyilur", "state":"Tamil Nadu"},
      {"city":"Tirunelveli", "state":"Tamil Nadu"},
      {"city":"Tirupathur", "state":"Tamil Nadu"},
      {"city":"Tirupathur", "state":"Tamil Nadu"},
      {"city":"Tiruppur", "state":"Tamil Nadu"},
      {"city":"Tiruttani", "state":"Tamil Nadu"},
      {"city":"Tiruvannamalai", "state":"Tamil Nadu"},
      {"city":"Tiruvethipuram", "state":"Tamil Nadu"},
      {"city":"Tittakudi", "state":"Tamil Nadu"},
      {"city":"Udhagamandalam", "state":"Tamil Nadu"},
      {"city":"Udumalaipettai", "state":"Tamil Nadu"},
      {"city":"Unnamalaikadai", "state":"Tamil Nadu"},
      {"city":"Usilampatti", "state":"Tamil Nadu"},
      {"city":"Uthamapalayam", "state":"Tamil Nadu"},
      {"city":"Uthiramerur", "state":"Tamil Nadu"},
      {"city":"Vadakkuvalliyur", "state":"Tamil Nadu"},
      {"city":"Vadalur", "state":"Tamil Nadu"},
      {"city":"Vadipatti", "state":"Tamil Nadu"},
      {"city":"Valparai", "state":"Tamil Nadu"},
      {"city":"Vandavasi", "state":"Tamil Nadu"},
      {"city":"Vaniyambadi", "state":"Tamil Nadu"},
      {"city":"Vedaranyam", "state":"Tamil Nadu"},
      {"city":"Vellakoil", "state":"Tamil Nadu"},
      {"city":"Vellore", "state":"Tamil Nadu"},
      {"city":"Vikramasingapuram", "state":"Tamil Nadu"},
      {"city":"Viluppuram", "state":"Tamil Nadu"},
      {"city":"Virudhachalam", "state":"Tamil Nadu"},
      {"city":"Virudhunagar", "state":"Tamil Nadu"},
      {"city":"Viswanatham", "state":"Tamil Nadu"},
      {"city":"Agartala", "state":"Tripura"},
      {"city":"Badharghat", "state":"Tripura"},
      {"city":"Dharmanagar", "state":"Tripura"},
      {"city":"Indranagar", "state":"Tripura"},
      {"city":"Jogendranagar", "state":"Tripura"},
      {"city":"Kailasahar", "state":"Tripura"},
      {"city":"Khowai", "state":"Tripura"},
      {"city":"Pratapgarh", "state":"Tripura"},
      {"city":"Udaipur", "state":"Tripura"},
      {"city":"Achhnera", "state":"Uttar Pradesh"},
      {"city":"Adari", "state":"Uttar Pradesh"},
      {"city":"Agra", "state":"Uttar Pradesh"},
      {"city":"Aligarh", "state":"Uttar Pradesh"},
      {"city":"Allahabad", "state":"Uttar Pradesh"},
      {"city":"Amroha", "state":"Uttar Pradesh"},
      {"city":"Azamgarh", "state":"Uttar Pradesh"},
      {"city":"Bahraich", "state":"Uttar Pradesh"},
      {"city":"Ballia", "state":"Uttar Pradesh"},
      {"city":"Balrampur", "state":"Uttar Pradesh"},
      {"city":"Banda", "state":"Uttar Pradesh"},
      {"city":"Bareilly", "state":"Uttar Pradesh"},
      {"city":"Chandausi", "state":"Uttar Pradesh"},
      {"city":"Dadri", "state":"Uttar Pradesh"},
      {"city":"Deoria", "state":"Uttar Pradesh"},
      {"city":"Etawah", "state":"Uttar Pradesh"},
      {"city":"Fatehabad", "state":"Uttar Pradesh"},
      {"city":"Fatehpur", "state":"Uttar Pradesh"},
      {"city":"Fatehpur", "state":"Uttar Pradesh"},
      {"city":"Greater Noida", "state":"Uttar Pradesh"},
      {"city":"Hamirpur", "state":"Uttar Pradesh"},
      {"city":"Hardoi", "state":"Uttar Pradesh"},
      {"city":"Jajmau", "state":"Uttar Pradesh"},
      {"city":"Jaunpur", "state":"Uttar Pradesh"},
      {"city":"Jhansi", "state":"Uttar Pradesh"},
      {"city":"Kalpi", "state":"Uttar Pradesh"},
      {"city":"Kanpur", "state":"Uttar Pradesh"},
      {"city":"Kota", "state":"Uttar Pradesh"},
      {"city":"Laharpur", "state":"Uttar Pradesh"},
      {"city":"Lakhimpur", "state":"Uttar Pradesh"},
      {"city":"Lal Gopalganj Nindaura", "state":"Uttar Pradesh"},
      {"city":"Lalganj", "state":"Uttar Pradesh"},
      {"city":"Lalitpur", "state":"Uttar Pradesh"},
      {"city":"Lar", "state":"Uttar Pradesh"},
      {"city":"Loni", "state":"Uttar Pradesh"},
      {"city":"Lucknow", "state":"Uttar Pradesh"},
      {"city":"Mathura", "state":"Uttar Pradesh"},
      {"city":"Meerut", "state":"Uttar Pradesh"},
      {"city":"Modinagar", "state":"Uttar Pradesh"},
      {"city":"Muradnagar", "state":"Uttar Pradesh"},
      {"city":"Nagina", "state":"Uttar Pradesh"},
      {"city":"Najibabad", "state":"Uttar Pradesh"},
      {"city":"Nakur", "state":"Uttar Pradesh"},
      {"city":"Nanpara", "state":"Uttar Pradesh"},
      {"city":"Naraura", "state":"Uttar Pradesh"},
      {"city":"Naugawan Sadat", "state":"Uttar Pradesh"},
      {"city":"Nautanwa", "state":"Uttar Pradesh"},
      {"city":"Nawabganj", "state":"Uttar Pradesh"},
      {"city":"Nehtaur", "state":"Uttar Pradesh"},
      {"city":"NOIDA", "state":"Uttar Pradesh"},
      {"city":"Noorpur", "state":"Uttar Pradesh"},
      {"city":"Obra", "state":"Uttar Pradesh"},
      {"city":"Orai", "state":"Uttar Pradesh"},
      {"city":"Padrauna", "state":"Uttar Pradesh"},
      {"city":"Palia Kalan", "state":"Uttar Pradesh"},
      {"city":"Parasi", "state":"Uttar Pradesh"},
      {"city":"Phulpur", "state":"Uttar Pradesh"},
      {"city":"Pihani", "state":"Uttar Pradesh"},
      {"city":"Pilibhit", "state":"Uttar Pradesh"},
      {"city":"Pilkhuwa", "state":"Uttar Pradesh"},
      {"city":"Powayan", "state":"Uttar Pradesh"},
      {"city":"Pukhrayan", "state":"Uttar Pradesh"},
      {"city":"Puranpur", "state":"Uttar Pradesh"},
      {"city":"Purquazi", "state":"Uttar Pradesh"},
      {"city":"Purwa", "state":"Uttar Pradesh"},
      {"city":"Rae Bareli", "state":"Uttar Pradesh"},
      {"city":"Rampur", "state":"Uttar Pradesh"},
      {"city":"Rampur Maniharan", "state":"Uttar Pradesh"},
      {"city":"Rasra", "state":"Uttar Pradesh"},
      {"city":"Rath", "state":"Uttar Pradesh"},
      {"city":"Renukoot", "state":"Uttar Pradesh"},
      {"city":"Reoti", "state":"Uttar Pradesh"},
      {"city":"Robertsganj", "state":"Uttar Pradesh"},
      {"city":"Rudauli", "state":"Uttar Pradesh"},
      {"city":"Rudrapur", "state":"Uttar Pradesh"},
      {"city":"Sadabad", "state":"Uttar Pradesh"},
      {"city":"Safipur", "state":"Uttar Pradesh"},
      {"city":"Saharanpur", "state":"Uttar Pradesh"},
      {"city":"Sahaspur", "state":"Uttar Pradesh"},
      {"city":"Sahaswan", "state":"Uttar Pradesh"},
      {"city":"Sahawar", "state":"Uttar Pradesh"},
      {"city":"Sahjanwa", "state":"Uttar Pradesh"},
      {"city":"Saidpur", "state":" Ghazipur"},
      {"city":"Sambhal", "state":"Uttar Pradesh"},
      {"city":"Samdhan", "state":"Uttar Pradesh"},
      {"city":"Samthar", "state":"Uttar Pradesh"},
      {"city":"Sandi", "state":"Uttar Pradesh"},
      {"city":"Sandila", "state":"Uttar Pradesh"},
      {"city":"Sardhana", "state":"Uttar Pradesh"},
      {"city":"Seohara", "state":"Uttar Pradesh"},
      {"city":"Shahabad", "state":" Hardoi"},
      {"city":"Shahabad", "state":" Rampur"},
      {"city":"Shahganj", "state":"Uttar Pradesh"},
      {"city":"Shahjahanpur", "state":"Uttar Pradesh"},
      {"city":"Shamli", "state":"Uttar Pradesh"},
      {"city":"Shamsabad", "state":" Agra"},
      {"city":"Shamsabad", "state":" Farrukhabad"},
      {"city":"Sherkot", "state":"Uttar Pradesh"},
      {"city":"Shikarpur", "state":" Bulandshahr"},
      {"city":"Shikohabad", "state":"Uttar Pradesh"},
      {"city":"Shishgarh", "state":"Uttar Pradesh"},
      {"city":"Siana", "state":"Uttar Pradesh"},
      {"city":"Sikanderpur", "state":"Uttar Pradesh"},
      {"city":"Sikandra Rao", "state":"Uttar Pradesh"},
      {"city":"Sikandrabad", "state":"Uttar Pradesh"},
      {"city":"Sirsaganj", "state":"Uttar Pradesh"},
      {"city":"Sirsi", "state":"Uttar Pradesh"},
      {"city":"Sitapur", "state":"Uttar Pradesh"},
      {"city":"Soron", "state":"Uttar Pradesh"},
      {"city":"Suar", "state":"Uttar Pradesh"},
      {"city":"Sultanpur", "state":"Uttar Pradesh"},
      {"city":"Sumerpur", "state":"Uttar Pradesh"},
      {"city":"Tanda", "state":"Uttar Pradesh"},
      {"city":"Tanda", "state":"Uttar Pradesh"},
      {"city":"Tetri Bazar", "state":"Uttar Pradesh"},
      {"city":"Thakurdwara", "state":"Uttar Pradesh"},
      {"city":"Thana Bhawan", "state":"Uttar Pradesh"},
      {"city":"Tilhar", "state":"Uttar Pradesh"},
      {"city":"Tirwaganj", "state":"Uttar Pradesh"},
      {"city":"Tulsipur", "state":"Uttar Pradesh"},
      {"city":"Tundla", "state":"Uttar Pradesh"},
      {"city":"Unnao", "state":"Uttar Pradesh"},
      {"city":"Utraula", "state":"Uttar Pradesh"},
      {"city":"Varanasi", "state":"Uttar Pradesh"},
      {"city":"Vrindavan", "state":"Uttar Pradesh"},
      {"city":"Warhapur", "state":"Uttar Pradesh"},
      {"city":"Zaidpur", "state":"Uttar Pradesh"},
      {"city":"Zamania", "state":"Uttar Pradesh"},
      {"city":"Almora", "state":"Uttarakhand"},
      {"city":"Bazpur", "state":"Uttarakhand"},
      {"city":"Chamba", "state":"Uttarakhand"},
      {"city":"Dehradun", "state":"Uttarakhand"},
      {"city":"Haldwani", "state":"Uttarakhand"},
      {"city":"Haridwar", "state":"Uttarakhand"},
      {"city":"Jaspur", "state":"Uttarakhand"},
      {"city":"Kashipur", "state":"Uttarakhand"},
      {"city":"kichha", "state":"Uttarakhand"},
      {"city":"Kotdwara", "state":"Uttarakhand"},
      {"city":"Manglaur", "state":"Uttarakhand"},
      {"city":"Mussoorie", "state":"Uttarakhand"},
      {"city":"Nagla", "state":"Uttarakhand"},
      {"city":"Nainital", "state":"Uttarakhand"},
      {"city":"Pauri", "state":"Uttarakhand"},
      {"city":"Pithoragarh", "state":"Uttarakhand"},
      {"city":"Ramnagar", "state":"Uttarakhand"},
      {"city":"Rishikesh", "state":"Uttarakhand"},
      {"city":"Roorkee", "state":"Uttarakhand"},
      {"city":"Rudrapur", "state":"Uttarakhand"},
      {"city":"Sitarganj", "state":"Uttarakhand"},
      {"city":"Tehri", "state":"Uttarakhand"},
      {"city":"Muzaffarnagar", "state":"Uttar Pradesh"},
      {"city":"Adra", "state":" Purulia"},
      {"city":"Alipurduar", "state":"West Bengal"},
      {"city":"Arambagh", "state":"West Bengal"},
      {"city":"Asansol", "state":"West Bengal"},
      {"city":"Baharampur", "state":"West Bengal"},
      {"city":"Bally", "state":"West Bengal"},
      {"city":"Balurghat", "state":"West Bengal"},
      {"city":"Bankura", "state":"West Bengal"},
      {"city":"Barakar", "state":"West Bengal"},
      {"city":"Barasat", "state":"West Bengal"},
      {"city":"Bardhaman", "state":"West Bengal"},
      {"city":"Bidhan Nagar", "state":"West Bengal"},
      {"city":"Chinsura", "state":"West Bengal"},
      {"city":"Contai", "state":"West Bengal"},
      {"city":"Cooch Behar", "state":"West Bengal"},
      {"city":"Darjeeling", "state":"West Bengal"},
      {"city":"Durgapur", "state":"West Bengal"},
      {"city":"Haldia", "state":"West Bengal"},
      {"city":"Howrah", "state":"West Bengal"},
      {"city":"Islampur", "state":"West Bengal"},
      {"city":"Jhargram", "state":"West Bengal"},
      {"city":"Kharagpur", "state":"West Bengal"},
      {"city":"Kolkata", "state":"West Bengal"},
      {"city":"Mainaguri", "state":"West Bengal"},
      {"city":"Mal", "state":"West Bengal"},
      {"city":"Mathabhanga", "state":"West Bengal"},
      {"city":"Medinipur", "state":"West Bengal"},
      {"city":"Memari", "state":"West Bengal"},
      {"city":"Monoharpur", "state":"West Bengal"},
      {"city":"Murshidabad", "state":"West Bengal"},
      {"city":"Nabadwip", "state":"West Bengal"},
      {"city":"Naihati", "state":"West Bengal"},
      {"city":"Panchla", "state":"West Bengal"},
      {"city":"Pandua", "state":"West Bengal"},
      {"city":"Paschim Punropara", "state":"West Bengal"},
      {"city":"Purulia", "state":"West Bengal"},
      {"city":"Raghunathpur", "state":"West Bengal"},
      {"city":"Raiganj", "state":"West Bengal"},
      {"city":"Rampurhat", "state":"West Bengal"},
      {"city":"Ranaghat", "state":"West Bengal"},
      {"city":"Sainthia", "state":"West Bengal"},
      {"city":"Santipur", "state":"West Bengal"},
      {"city":"Siliguri", "state":"West Bengal"},
      {"city":"Sonamukhi", "state":"West Bengal"},
      {"city":"Srirampore", "state":"West Bengal"},
      {"city":"Suri", "state":"West Bengal"},
      {"city":"Taki", "state":"West Bengal"},
      {"city":"Tamluk", "state":"West Bengal"},
      {"city":"Tarakeswar", "state":"West Bengal"},
      {"city":"Chikmagalur", "state":"Karnataka"},
      {"city":"Davanagere", "state":"Karnataka"},
      {"city":"Dharwad", "state":"Karnataka"},
      {"city":"Gadag", "state":"Karnataka"},
      {"city":"Chennai", "state":"Tamil Nadu"},
      {"city":"Coimbatore", "state":"Tamil Nadu"}
    ]
slectCountry="India"
  
constructor(private formBuilder: FormBuilder){
      
    

  }
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
        Careerobj:['', Validators.required],
        name:['', Validators.required],
        email:['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        mobilenumber: ['', Validators.required],
        address:['', Validators.required],
        dob:['', Validators.required],
        country:['', Validators.required],
        city:['', Validators.required],
        state:['', Validators.required],
        gender: 'male',
        marital:'',
        zipCode:['', Validators.required],
        
      });
      this.educationForm = this.formBuilder.group({
        // items: this.formBuilder.array([ this.createItem() ]),
        institute:['', Validators.required],
        course:['', Validators.required],
        boarduniversity:['', Validators.required],
        percentageCGPA:['', Validators.required],
        graduatedPersuing:'',
        passingYear:['', Validators.required],
      }); 
      this.projectForm = this.formBuilder.group({
        projectname:['', Validators.required],
        projectdeatils:['', Validators.required],
        role:['', Validators.required],
        member:['', Validators.required],
        
      }) ;
      this.workexperienceForm = this.formBuilder.group({
           companyname:['', Validators.required],
           stillWorking:['', Validators.required],
           yearandmonth:['', Validators.required],
           jobdescription:['', Validators.required],
      });

      this.othersdetailForm = this.formBuilder.group({
        skills:['', Validators.required],
        achievements:['', Validators.required],
        hobby:['', Validators.required],
        decleration:['', Validators.required],
        formate:'',



      })

      //console.log('myform',this.myForm)
      //console.log('educationForm',this.educationForm);
      //console.log('workexperience',this.workexperienceForm);
      //console.log('projectForm',this.projectForm);
  }

  

 
  
  OnRemoveEducation(i){
    this.array.splice(i,1)
  }

  OnEditEducation(arr){
   console.log('data',arr)
   this.institute=arr.institute
   this.course=arr.course;
   this.board=arr.boarduniversity;
   this.grad=arr.graduatedPersuing;
   this.year=arr.passingYear;
   this.percentage=arr.percentageCGPA;
   this.cg=arr.percentageCGPA;

  }
  onEditProject(arr2){
    this.projectName = arr2.projectname;
    this.member = arr2.member;
    this.role = arr2.role;
    this.projectDetail = arr2.projectdeatils;

  }
  addInTable(){
    this.submitted1 = true;
    if(this.educationForm.valid){
  console.log(this.educationForm.controls['institute'].value)
    this.data={
      'institute':this.educationForm.controls['institute'].value,
      'course':this.educationForm.controls['course'].value,
      'boarduniversity':this.educationForm.controls['boarduniversity'].value,
      'percentageCGPA':this.educationForm.controls['percentageCGPA'].value,
      'graduatedPersuing':this.educationForm.controls['graduatedPersuing'].value,
      'passingYear':this.educationForm.controls['passingYear'].value,

    }
   // console.log('data',this.data) 
   localStorage.setItem('formdata',JSON.stringify(this.array)) 
   this.array.push(this.data);
   console.log('array',this.array)
    }
  
  }
  
  addWorkExperienceInTAble(){
    this.submitted2 = true;
    if(this.workexperienceForm.valid){
    this.data1={
      'companyname':this.workexperienceForm.controls['companyname'].value,
      'stillWorking':this.workexperienceForm.controls['stillWorking'].value,
      'yearandmonth':this.workexperienceForm.controls['yearandmonth'].value,
      'jobdescription':this.workexperienceForm.controls['jobdescription'].value,
    

    }
   localStorage.setItem('workExperienceForm',JSON.stringify(this.array1)) 
   this.array1.push(this.data1);
    console.log('array1',this.array2)
    }
   
  }
  addProjectInTAble(){
    this.submitted3 = true;
    if(this.projectForm.valid){
    this.data2={
      'projectname':this.projectForm.controls['projectname'].value,
      'member':this.projectForm.controls['member'].value,
      'role':this.projectForm.controls['role'].value,
      'projectdeatils':this.projectForm.controls['projectdeatils'].value,
      }

      localStorage.setItem('projectDetails',JSON.stringify(this.array2)) 
      this.array2.push(this.data2);
      console.log('array2',this.array2)
    }


  }

  onRemoveWorkExp(i) {
    this.array1.splice(i,1)
  
  }
  onRemoveProject(i){
    this.array2.splice(i,1);
  }

  onEditWorkExp(arr1)
{
  this.companyName = arr1.companyname;
  this.defaultYes = arr1.stillWorking;
  this.experience = arr1.yearandmonth;
  this,this.jobdiscription = arr1.jobdescription;
}

submit(){
    console.log('myform data',this.myForm.controls['items'].value.map(element => {
      return [element.institute,
      element.course,
      element.boarduniversity,
      element.percentageCGPA,
      element.graduatedPersuing,
      element.passingYear];
    })
)
  }
  next(){
     this.submitted = true;
  }
  next1(){
    if(this.educationForm.invalid){
      this.submitted1 = true;
    }
   else if(this.array.length == 0){
      alert('click the button add')
    }
  }
  next2(){
    this.submitted2 = true;
  }
  next3(){
       this.submitted3 = true;
  
  }
   
  generatePdf(action) {
    let documentDefinition;
    
      if(this.formates == 'Formate1'){
        console.log('value defult1',this.formates)
        documentDefinition = this.getDocumentDefinition();

      }
      else if(this.formates == 'Formate2'){
        console.log('defaultfromate2',this.formates)
        documentDefinition=this.getDocumentDefinition1();
      }
    console.log('check',documentDefinition)
    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open();    
      break;
      case 'print': pdfMake.createPdf(documentDefinition).print(); 
      break;
      case 'download':     
      pdfMake.createPdf(documentDefinition).download(); 
      break;
      default: pdfMake.createPdf(documentDefinition).open(); 
      break;
     }
    
}
 getDocumentDefinition(){
  localStorage.setItem('resume', JSON.stringify(this.myForm.value));
  return{
    content: [
      {
        text:'RESUME',
        bold: true,
        fontSize: 20,
        alignment: 'center',
        margin: [0, 0, 0, 20]
       
      },
      {
        columns: [
          [
            {
              text:this.myForm.controls['name'].value,
                bold: true,
                fontSize: 15,
            },
            {
              text:this.myForm.controls['email'].value,
                style:'font',
                color:'blue'
            },
            {
              text:this.myForm.controls['mobilenumber'].value,
              style:'font'

            },
            {
              text:this.myForm.controls['address'].value,
              style:'font'

            },
            {
               text:this.myForm.controls['zipCode'].value,
            },

            {
              text:'Career Objective',
              style:'header'
            },
            {
              text: this.myForm.controls['Careerobj'].value,
              style: 'font' 
            },
            
        ],       ],
      },
      
      {
        text: 'Education',
        style:'header'
        

      },
       
    this.getEducationObject(this.array),
     {
      text: 'Skills',
      style:'header'
      

    },
      this.othersdetailForm.controls['skills'].value,
     {
      text: 'Experience',
      style:'header'
    },

    this.getExperienceObject(this.array1),

     {
       text: 'Project Details',
       style:'header'

     },

      this.getProjectDetaileObject(this.array2),

     {
      columns: [
        [
          {
            text: 'Others Information',
            style:'header'
          },
          {
            text: 'Date of Birth :  ' + this.myForm.controls['dob'].value,
          },
           {
              text: 'Gender :  ' + this.myForm.controls['gender'].value,
            },
            {
              text:'Country :  ' +  this.myForm.controls['country'].value,
            },
            {
              text:'City : ' +  this.myForm.controls['city'].value,
            },
            {
              text:'State :   ' +  this.myForm.controls['state'].value,
            },
            {
              text:'Marital Status :   ' +  this.myForm.controls['marital'].value,
            }

        ],
        
      ],
      
     },
     {
      text:'Hobbies',
      style:'header'
     },
     this.othersdetailForm.controls['hobby'].value,
     {
      text:'Achievemnet',
      style:'header'
     },
     this.othersdetailForm.controls['achievements'].value,

     {
      text:'Decleration',
      style:'header'
     },
     this.othersdetailForm.controls['decleration'].value

    ],
    info: {
      title: this.myForm.controls['name'].value + '_RESUME',
      author: this.myForm.controls['name'].value,
      subject: 'RESUME',
      keywords: 'RESUME, ONLINE RESUME',
    },
      styles: {
        header: {
          fontSize:15,
          bold: true,
          margin: [0, 20, 0, 10],
        },
        name: {
          fontSize:15,
          bold: true
        },
        jobTitle: {
          fontSize:14,
          bold: true,

        },
        font:{
         fontsize:7,

        }
        
      }
  };
  } ​    
  

 getEducationObject(educations: Education[]) {
  return {
    table: {
      widths: ['*', '*', '*', '*','*','*'],
      body: [
        [{
          text: 'Institute',
          style: 'font'
        },
        {
          text: 'Course',
          style: 'font'        },
        {
          text: 'Bord/University',
          style: 'font'        },
        {
          text: 'Passing Year',
          style: 'font'        },
        {
          text: 'Graduated/Persuing',
          style: 'font'        },
        {
          text: 'Per/CGPA',
          style: 'font'        },

        ],
        ...educations.map(ed => {
          return [ed.institute, ed.course, ed.boarduniversity, ed.passingYear,ed.graduatedPersuing,ed.percentageCGPA];
        })
      ]
    }
  };
}
getExperienceObject(experiences: Experience[]) {
 console.log(this.workexperienceForm.value)
  const exs = [];

  experiences.forEach(experience => {
    exs.push(
      [{
        columns: [
          [{
            text:'company Name: '+ experience.companyname,
            style: 'jobTitle'
          },
          {
            text:'Still Working: '+experience.stillWorking,
            style: 'font'
          },
         {
            text:'Job Description '+experience.jobdescription,
            style: 'font'
        }],
          {
            text: 'Experience : ' + experience.yearandmonth,
            style: 'font',
            alignment:'right',
            
          }
        ]
      }]
    );
  });

  return {
    table: {
      widths: ['*'],
      body: [
        ...exs
      ]
    }
  };
}
getProjectDetaileObject(projectdetail: Projectdeatil[]) {

  const exse = [];

  projectdetail.forEach(projectdetail => {
    exse.push(
      [{
        columns: [
          [{
            text:'Project Name : '+ projectdetail.projectname,
            style: 'jobTitle'
          },
          
          {
            text:'Role: '+ projectdetail.role,
            style: 'font'
          },
         {
            text:'Project Details : '+  projectdetail.projectdeatils,
            style: 'font'
        },
        ],
          {
            text:'Team Member : '+ projectdetail.member,
            alignment:'right'
          }
          
        ]
      }]
    );
  });

  return {
    table: {
      widths: ['*'],
      body: [
        ...exse
      ]
    }
  };
}

  
getDocumentDefinition1(){
  localStorage.setItem('resume', JSON.stringify(this.myForm.value));
  return{
    content: [
      {
        text:this.myForm.controls['name'].value,
        bold: true,
        fontSize: 20,
        alignment: 'center',
       
      },
      {
        text:this.myForm.controls['email'].value,
        style:'font',
        color:'blue',
        alignment: 'center',
      },
      {
        columns: [
          [

            {
              text:'Career Objective',
              style:'header'
            },
            {
              text: this.myForm.controls['Careerobj'].value,
              style: 'font' 
            },
            
        ],
      ],
      },
      
      {
        text: 'Education',
        style:'header'
        

      },
    this.getEducationObject(this.array),

     {
      text: 'Skills',
      style:'header'
      

    },
      this.othersdetailForm.controls['skills'].value,
     {
      text: 'Experience',
      style:'header'
      
     },
    this.getExperienceObject(this.array1),
     {
       text: 'Project Details',
       style:'header'

     },
    this.getProjectDetaileObject(this.array2),
     {
      columns: [
        [
          {
            text: 'Others Information',
            style:'header'
          },
          {
            text: 'Contact no.'+ this.myForm.controls['mobilenumber'].value,
            style:'font'

          },
          {
            text:'address' + this.myForm.controls['address'].value,
            style:'font'

          },
          {
            text:'Zip Code :   ' +  this.myForm.controls['zipCode'].value,
          },
          {
            text: 'Date of Birth :  ' + this.myForm.controls['dob'].value,
          },
           {
              text: 'Gender :  ' + this.myForm.controls['gender'].value,
            },
            {
              text:'Country :  ' +  this.myForm.controls['country'].value,

            },
            {
              text:'City : ' +  this.myForm.controls['city'].value,
            },
            {
              text:'State :   ' +  this.myForm.controls['state'].value,
            },
            {
              text:'Marital Status :   ' +  this.myForm.controls['marital'].value,
            }

        ],
        
      ],
      
     },
     {
      text:'Hobbies',
      style:'header'
     },
      this.othersdetailForm.controls['hobby'].value,
     {
      text:'Achievemnet',
      style:'header'
     },
     this.othersdetailForm.controls['achievements'].value,

     {
      text:'Decleration',
      style:'header'
     },
     this.othersdetailForm.controls['decleration'].value

    ],
    info: {
      title: this.myForm.controls['name'].value + '_RESUME',
      author: this.myForm.controls['name'].value,
      subject: 'RESUME',
      keywords: 'RESUME, ONLINE RESUME',
    },
      styles: {
        header: {
          fontSize:15,
          bold: true,
          margin: [0, 20, 0, 10],
        },
        name: {
          fontSize:15,
          bold: true
        },
        jobTitle: {
          fontSize:14,
          bold: true,

        },
        font:{
         fontsize:7,

        }
      
      }
  };
  } ​    
 
  formate1(){
    this.formates = 'Formate1'
    this.generatePdf('open');
    
  }
  formate2(){

    this.formates = 'Formate2'
    this.generatePdf('open');
  
  }
  downloadFormate1(){
    this.formates = 'Formate1'
    this.generatePdf('download');
  }
  downloadFormate2(){
    this.formates = 'Formate2'
    this.generatePdf('download');
  }
  onchange(event){
    console.log(event.target.value)
  if(this.defaultPercentage==event.target.value)
  {
       this.div1=true;
       this.div2=false;
  }
  else {
    this.div1=false;

  }
 if(this.cgpa == event.target.value){
    this.div2=true;
    this.div1=false;
  }
  else{
    this.div2 = false;
  }
  


  }

  numberOnly(event):boolean {
     const charCode = (event.which) ? event.which : event.keyCode;
     if(charCode > 31 && (charCode < 48 || charCode > 57)){
       return false;
     }

    return true;

  }
  resetEducationForm(){
    this.educationForm.reset();
    this.submitted1 = false;
  }
  resetWorkExperienceForm(){
     this.workexperienceForm.reset();
     this.submitted2 = false;
  }
  resetProjectdetailForm(){
    this.projectForm.reset();
    this.submitted3 = false;
  }


}

 
  

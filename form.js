   $(document).ready(function(){
        $.getJSON('http://10.1.4.130/Project_test/views/img_slider.json', function(data) {
            // $("#destinations option").remove();
            destinations = data['Destinations'];

            $.each(destinations, function(id, destination) {
                $('#destinations').append('<img id="slider" src="'+destination["destinationName"]+'">');
            });
        });
    });

jQuery(function ($) {
    var input = {
        "data": [{
            "country": "USA",
                "states": [
                "Alabama",
                "Alaska",
                "Arizona",
                "California",
                "Colorado",
                "Connecticut",
                "Delaware",
                "District Of Columbia",
                "Florida",
                "Georgia",
                "Hawaii",
                "Idaho",
                "Illinois",
                "Indiana",
                "Iowa",
                "Kansas",
                "Kentucky",
                "Louisiana",
                "Maine",
                "Maryland",
                "Massachusetts",
                "Michigan",
                "Minnesota",
                "Mississippi",
                "Missouri",
                "Montana",
                "Nebraska",
                "Nevada",
                "New Hampshire",
                "New Jersey",
                "New Mexico",
                "New York",
                "North Carolina",
]
        }, 
        {
            "country": "India",
                "states": [
               "Andhra Pradesh (AP)",
                "Arunachal Pradesh (AR)",
               " Assam (AS)",
               " Bihar (BR)",
               " Chhattisga",
               " Goa (GA)",
               " Gujarat (GJ)",
               " Haryana (HR)",
               " Himachal Pradesh (HP)",
               " Jammu and Kashmir (JK)",
               " Jharkhand (JH)",
               " Karnataka (KA)",
               " Kerala (KL)",
               " Madhya Pradesh (MP)",
               " Maharashtra (MH)",
               " Manipur (MN)",
              "  Meghalaya (ML)",
               " Mizoram (MZ)",
               " Nagaland (NL)",
               " Odisha(OR)",
               " Punjab (PB)",
               " Rajasthan (RJ)",
                "Sikkim (SK)",
               " Tamil Nadu (TN)",
               " Tripura (TR)",
               " Uttar Pradesh (UP)",
               "  Uttarakhand (UK)",
               " West Bengal (WB)",
    ]
        },
        {
            "country": "Australia",
                "states": [
                "New South Wales",
                "Queensland",
                "Tasmania",
                "Victoria",
                "Western Australia",
                "South Australia"]
        }, 
    {
            "country": "Canada",
                "states": [
                "Alberta",
               " British Columbia",
                "Manitoba",
                "New Brunswick",
               " Newfoundland",
               " Northwest Territories",
               " Nova Scotia",
                "Nunavut",
               " Ontario",
                "Prince Edward Island",
                "Quebec",
                "Saskatchewan",
                "Yukon"]
        }, 
         {
            "country": "Germany",
                "states": [
                "Baden-Wurttemberg", 
                "Bayern", 
                "Berlin", 
                "Brandenburg", 
                "Bremen", 
                "Hamburg", 
                "Hessen", 
                "Mecklenburg-Vorpommern", 
                "Niedersachsen", 
                "Nordrhein-Westfalen", 
                "Rheinland-Pfalz", 
                "Saarland", 
                "Sachsen", 
                "Sachsen-Anhalt", 
                "Schleswig-Holstein", 
                "Thuringen"]
      }
      ]

    };

    $.each(input.data, function (index, d) {
        $("#country").append("<option value=\"" + d.country + "\">" + d.country + "</option>");
    });

    $("#country").on("change", function () {
        var selectedCountry = $("#country").val();
        var t = $.map(input.data, function (obj) {
            if (obj.country === selectedCountry) return obj;
        });
        if (t.length != 0) {
            $('#states').empty();
            debugger;
            $.each(t[0].states, function (index, d) {
                $("#states").append("<option value=\"" + d + "\">" + d + "</option>");
            });
        }
    });

    $("#country").change();

});
function validateFunction(event) 
{
	var f_email = document.forms["MainForm"]["first_email"].value;
	var s_email = document.forms["MainForm"]["second_email"].value;
		if(f_email != s_email)
		{
			alert("Email mismatch!!!");
			return false;
		}
		else
		{
			if (confirm("Name: " + document.MainForm.fname.value+ " " + document.MainForm.sname.value + "\n\n" + "Date Of Birth: " + 
				document.MainForm.dob_day.value + "/" + document.MainForm.dob_month.value + "/" + document.getElementById("dob_year").value 
				+ "\n\n" + "Age: " + document.getElementById("age").value + "\n\n" + "Email: " + document.MainForm.first_email.value 
				+ "\n\n" + "Mobile: " + document.MainForm.Mobile.value  + "\n\n" + "Address :  " + "\n" + document.MainForm.HouseName.value 
				+ "\n" + document.MainForm.PostOffice.value 
				+ "\n" + document.MainForm.District.value  + "\n" + document.MainForm.State.value 
				+ "\n" + document.MainForm.Zipcode.value + "\n" + document.MainForm.country.value) == true) 
			{
				
        		return true;
        	}
     		else 
     		{
        	return false;
    		}

			}
      // if (true) {alert("Submitted Successfully!!!");};
}


function fillAddress(f) {
  if(f.copyAddress.checked == true) {
  	f.HouseName.value = f._HouseName.value;
    f.PostOffice.value = f._PostOffice.value;
    f.District.value = f._District.value;
    f.State.value = f._State.value;
    f.Zipcode.value = f._Zipcode.value;
  }
}
function ageCalc() {
        var presentAge = 2015;
        document.getElementById("age").value = presentAge - document.getElementById("dob_year").value;
    }
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
function store(){
     var FirstName= document.MainForm.fname.value;
     localStorage.setItem("FName", FirstName);
     var SecondName= document.MainForm.sname.value;
     localStorage.setItem("SName", SecondName);
     var form_elements = document.getElementById('MainForm').elements;
     var selectedGender = form_elements['sex'].value;
     localStorage.setItem("Sex", selectedGender);
     var dob_day= document.MainForm.dob_day.value;
     localStorage.setItem("dob_day", dob_day);
     var dob_month= document.MainForm.dob_month.value;
     localStorage.setItem("dob_month", dob_month);
     var dob_year= document.getElementById("dob_year").value;
     localStorage.setItem("dob_year", dob_year);
     var age= document.getElementById("age").value
     localStorage.setItem("age", age);
     var Email= document.MainForm.first_email.value;
     localStorage.setItem("Email", Email);
     var HouseName= document.MainForm.HouseName.value;
     localStorage.setItem("HouseName", HouseName);
     var PostOffice= document.MainForm.PostOffice.value;
     localStorage.setItem("PostOffice", PostOffice);
     var District= document.MainForm.District.value;
     localStorage.setItem("District", District);
     var State= document.MainForm.State.value;
     localStorage.setItem("State", State);
     var Zipcode= document.MainForm.Zipcode.value;
     localStorage.setItem("Zipcode", Zipcode);
     var Country= document.MainForm.country.value;
     localStorage.setItem("Country", Country);
     var _State= document.MainForm.states.value;
     localStorage.setItem("_State", _State);

    }

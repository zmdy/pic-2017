/*
# ************************************ #
# UTILS.JS
# 
# This script is used to defines generic
# and useful .js functions
#
# METHODS
# [$] get_cookie(cookieName) 
# [$] parse_float(array)
# [$] parse_int(array)
# 
# ************************************ #
# This tool is licensed under GPL terms.
#
# Be free to:
# [+] run
# [+] study
# [+] change
# [+] improve
# [+] redistribute
# [+] share
# [+] and whatever you want to!
#
# But never forget to keep it free!
#
# "When we speak of free software,
# we are referring to freedom, not
# price."
# __ Gnu Public License 3.0 Preamble
# 
# ************************************ #
# ******* @hudsonUriel
# ******* OCT-2017
# *******  Lamniscata_Systems_#001 
# ************************************ #
#
*/


/*
 * _____ get_cookie(cookieName) _____ *
 * |
 * |
 * |--> This function is used to get a
 * [...] cookie with the specified cookieName,
 * [...] returning an empty array if no
 * [...] cookieName was found or the specified
 * [...] cookie, otherwise
 * |
 * |
 * ___________________________________*
 */
function get_cookie(cookieName){
  
  data = document.cookie.split(';');
  cookieReturn = [];
  
  // search for cookieName
  for(i=0; i<data.length; i++){
    if(data[i].split('=')[0].
      replace(' ', '') == cookieName){
      // fill cookieReturn with its values
      cookieName = data[i].split('=')[1].split(',');
      for(j=0; j<cookieName.length; j++){
        cookieReturn[j] = cookieName[j];
      }
      break;
    }
  }
  
  return cookieReturn;
}


/*
 * _____ get_size() _____ *
 * |
 * |
 * |--> This function is used to get
 * [...] the width and height in px
 * |
 * |
 * ___________________________________*
 */
function get_size(){
  return([window.innerWidth, window.innerHeight]);
}


/*
 * _____ parse_float(array) _____ *
 * |
 * |
 * |--> This function is used to converts
 * [...] each item of an array array to float
 * |
 * |
 * ___________________________________*
 */
function parse_float(array){
  for(i=0; i<array.length; i++){
    array[i] = parseFloat(array[i]);
  }
  
  return array;
}

/*
 * _____ parse_int(array) _____ *
 * |
 * |
 * |--> This function is used to converts
 * [...] each item of an array array to integer
 * |
 * |
 * ___________________________________*
 */
function parse_int(array){
  for(i=0; i<array.length; i++){
    array[i] = parseInt(array[i]);
  }
  
  return array;
}
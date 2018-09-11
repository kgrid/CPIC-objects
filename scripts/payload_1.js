
function phenotype (inputs) {
var output = {}
try {
var diplotype = inputs[gene]
var index = list[diplotype]
if (index == null) {
 output[gene] = 'Unknown'
} else {
if (index == 0) {
output[gene] = dict[0]
} else {
output[gene] = dict[index] + ' metabolizer'
   }
}
return output
} catch (error) {
  return 'Error ' + error
 }
    }
var gene = 'CYP2C19'
var dict = ['TBD', 'Poor', 'Likely Poor',  'Likely Intermediate', 'Intermediate', 'Normal', 'Rapid', 'Ultrarapid']
var list ={"*1/*1":"5 ","*1/*2":"4 ","*1/*3":"4 ","*1/*4A":"4 ","*1/*4B":"4 ","*1/*5":"4 ","*1/*6":"4 ","*1/*7":"4 ","*1/*8":"4 ","*1/*9":"3","*1/*10":"3","*1/*11":"5 ","*1/*12":"0","*1/*13":"5 ","*1/*14":"0","*1/*15":"5 ","*1/*16":"3","*1/*17":"6 ","*1/*18":"5 ","*1/*19":"3","*1/*22":"4 ","*1/*23":"0","*1/*24":"4 ","*1/*25":"3","*1/*26":"3","*1/*27":"0","*1/*28":"5 ","*1/*29":"0","*1/*30":"0","*1/*31":"0","*1/*32":"0","*1/*33":"0","*1/*34":"0","*1/*35":"4 ","*2/*2":"1","*2/*3":"1","*2/*4A":"1","*2/*4B":"1","*2/*5":"1","*2/*6":"1","*2/*7":"1","*2/*8":"1","*2/*9":"2","*2/*10":"2","*2/*11":"4 ","*2/*12":"0","*2/*13":"4 ","*2/*14":"0","*2/*15":"4 ","*2/*16":"2","*2/*17":"4 ","*2/*18":"4 ","*2/*19":"2","*2/*22":"1","*2/*23":"0","*2/*24":"1","*2/*25":"2","*2/*26":"2","*2/*27":"0","*2/*28":"4 ","*2/*29":"0","*2/*30":"0","*2/*31":"0","*2/*32":"0","*2/*33":"0","*2/*34":"0","*2/*35":"1","*3/*3":"1","*3/*4A":"1","*3/*4B":"1","*3/*5":"1","*3/*6":"1","*3/*7":"1","*3/*8":"1","*3/*9":"2","*3/*10":"2","*3/*11":"4 ","*3/*12":"0","*3/*13":"4 ","*3/*14":"0","*3/*15":"4 ","*3/*16":"2","*3/*17":"4 ","*3/*18":"4 ","*3/*19":"2","*3/*22":"1","*3/*23":"0","*3/*24":"1","*3/*25":"2","*3/*26":"2","*3/*27":"0","*3/*28":"4 ","*3/*29":"0","*3/*30":"0","*3/*31":"0","*3/*32":"0","*3/*33":"0","*3/*34":"0","*3/*35":"1","*4A/*4A":"1","*4A/*4B":"1","*4A/*5":"1","*4A/*6":"1","*4A/*7":"1","*4A/*8":"1","*4A/*9":"2","*4A/*10":"2","*4A/*11":"4 ","*4A/*12":"0","*4A/*13":"4 ","*4A/*14":"0","*4A/*15":"4 ","*4A/*16":"2","*4A/*17":"4 ","*4A/*18":"4 ","*4A/*19":"2","*4A/*22":"1","*4A/*23":"0","*4A/*24":"1","*4A/*25":"2","*4A/*26":"2","*4A/*27":"0","*4A/*28":"4 ","*4A/*29":"0","*4A/*30":"0","*4A/*31":"0","*4A/*32":"0","*4A/*33":"0","*4A/*34":"0","*4A/*35":"1","*4B/*4B":"1","*4B/*5":"1","*4B/*6":"1","*4B/*7":"1","*4B/*8":"1","*4B/*9":"2","*4B/*10":"2","*4B/*11":"4 ","*4B/*12":"0","*4B/*13":"4 ","*4B/*14":"0","*4B/*15":"4 ","*4B/*16":"2","*4B/*17":"4 ","*4B/*18":"4 ","*4B/*19":"2","*4B/*22":"1","*4B/*23":"0","*4B/*24":"1","*4B/*25":"2","*4B/*26":"2","*4B/*27":"0","*4B/*28":"4 ","*4B/*29":"0","*4B/*30":"0","*4B/*31":"0","*4B/*32":"0","*4B/*33":"0","*4B/*34":"0","*4B/*35":"1","*5/*5":"1","*5/*6":"1","*5/*7":"1","*5/*8":"1","*5/*9":"2","*5/*10":"2","*5/*11":"4 ","*5/*12":"0","*5/*13":"4 ","*5/*14":"0","*5/*15":"4 ","*5/*16":"2","*5/*17":"4 ","*5/*18":"4 ","*5/*19":"2","*5/*22":"1","*5/*23":"0","*5/*24":"1","*5/*25":"2","*5/*26":"2","*5/*27":"0","*5/*28":"4 ","*5/*29":"0","*5/*30":"0","*5/*31":"0","*5/*32":"0","*5/*33":"0","*5/*34":"0","*5/*35":"1","*6/*6":"1","*6/*7":"1","*6/*8":"1","*6/*9":"2","*6/*10":"2","*6/*11":"4 ","*6/*12":"0","*6/*13":"4 ","*6/*14":"0","*6/*15":"4 ","*6/*16":"2","*6/*17":"4 ","*6/*18":"4 ","*6/*19":"2","*6/*22":"1","*6/*23":"0","*6/*24":"1","*6/*25":"2","*6/*26":"2","*6/*27":"0","*6/*28":"4 ","*6/*29":"0","*6/*30":"0","*6/*31":"0","*6/*32":"0","*6/*33":"0","*6/*34":"0","*6/*35":"1","*7/*7":"1","*7/*8":"1","*7/*9":"2","*7/*10":"2","*7/*11":"4 ","*7/*12":"0","*7/*13":"4 ","*7/*14":"0","*7/*15":"4 ","*7/*16":"2","*7/*17":"4 ","*7/*18":"4 ","*7/*19":"2","*7/*22":"1","*7/*23":"0","*7/*24":"1","*7/*25":"2","*7/*26":"2","*7/*27":"0","*7/*28":"4 ","*7/*29":"0","*7/*30":"0","*7/*31":"0","*7/*32":"0","*7/*33":"0","*7/*34":"0","*7/*35":"1","*8/*8":"1","*8/*9":"2","*8/*10":"2","*8/*11":"4 ","*8/*12":"0","*8/*13":"4 ","*8/*14":"0","*8/*15":"4 ","*8/*16":"2","*8/*17":"4 ","*8/*18":"4 ","*8/*19":"2","*8/*22":"1","*8/*23":"0","*8/*24":"1","*8/*25":"2","*8/*26":"2","*8/*27":"0","*8/*28":"4 ","*8/*29":"0","*8/*30":"0","*8/*31":"0","*8/*32":"0","*8/*33":"0","*8/*34":"0","*8/*35":"1","*9/*9":"3","*9/*10":"3","*9/*11":"3","*9/*12":"0","*9/*13":"3","*9/*14":"0","*9/*15":"3","*9/*16":"3","*9/*17":"3","*9/*18":"3","*9/*19":"3","*9/*22":"2","*9/*23":"0","*9/*24":"2","*9/*25":"3","*9/*26":"3","*9/*27":"0","*9/*28":"3","*9/*29":"0","*9/*30":"0","*9/*31":"0","*9/*32":"0","*9/*33":"0","*9/*34":"0","*9/*35":"2","*10/*10":"3","*10/*11":"3","*10/*12":"0","*10/*13":"3","*10/*14":"0","*10/*15":"3","*10/*16":"3","*10/*17":"3","*10/*18":"3","*10/*19":"3","*10/*22":"2","*10/*23":"0","*10/*24":"2","*10/*25":"3","*10/*26":"3","*10/*27":"0","*10/*28":"3","*10/*29":"0","*10/*30":"0","*10/*31":"0","*10/*32":"0","*10/*33":"0","*10/*34":"0","*10/*35":"2","*11/*11":"5 ","*11/*12":"0","*11/*13":"5 ","*11/*14":"0","*11/*15":"5 ","*11/*16":"3","*11/*17":"6 ","*11/*18":"5 ","*11/*19":"3","*11/*22":"4 ","*11/*23":"0","*11/*24":"4 ","*11/*25":"3","*11/*26":"3","*11/*27":"0","*11/*28":"5 ","*11/*29":"0","*11/*30":"0","*11/*31":"0","*11/*32":"0","*11/*33":"0","*11/*34":"0","*11/*35":"4 ","*12/*12":"0","*12/*13":"0","*12/*14":"0","*12/*15":"0","*12/*16":"0","*12/*17":"0","*12/*18":"0","*12/*19":"0","*12/*22":"0","*12/*23":"0","*12/*24":"0","*12/*25":"0","*12/*26":"0","*12/*27":"0","*12/*28":"0","*12/*29":"0","*12/*30":"0","*12/*31":"0","*12/*32":"0","*12/*33":"0","*12/*34":"0","*12/*35":"0","*13/*13":"5 ","*13/*14":"0","*13/*15":"5 ","*13/*16":"3","*13/*17":"6 ","*13/*18":"5 ","*13/*19":"3","*13/*22":"4 ","*13/*23":"0","*13/*24":"4 ","*13/*25":"3","*13/*26":"3","*13/*27":"0","*13/*28":"5 ","*13/*29":"0","*13/*30":"0","*13/*31":"0","*13/*32":"0","*13/*33":"0","*13/*34":"0","*13/*35":"4 ","*14/*14":"0","*14/*15":"0","*14/*16":"0","*14/*17":"0","*14/*18":"0","*14/*19":"0","*14/*22":"0","*14/*23":"0","*14/*24":"0","*14/*25":"0","*14/*26":"0","*14/*27":"0","*14/*28":"0","*14/*29":"0","*14/*30":"0","*14/*31":"0","*14/*32":"0","*14/*33":"0","*14/*34":"0","*14/*35":"0","*15/*15":"5 ","*15/*16":"3","*15/*17":"6 ","*15/*18":"5 ","*15/*19":"3","*15/*22":"4 ","*15/*23":"0","*15/*24":"4 ","*15/*25":"3","*15/*26":"3","*15/*27":"0","*15/*28":"5 ","*15/*29":"0","*15/*30":"0","*15/*31":"0","*15/*32":"0","*15/*33":"0","*15/*34":"0","*15/*35":"4 ","*16/*16":"3","*16/*17":"3","*16/*18":"3","*16/*19":"3","*16/*22":"2","*16/*23":"0","*16/*24":"2","*16/*25":"3","*16/*26":"3","*16/*27":"0","*16/*28":"3","*16/*29":"0","*16/*30":"0","*16/*31":"0","*16/*32":"0","*16/*33":"0","*16/*34":"0","*16/*35":"2","*17/*17":"7 ","*17/*18":"6 ","*17/*19":"3","*17/*22":"4 ","*17/*23":"0","*17/*24":"4 ","*17/*25":"3","*17/*26":"3","*17/*27":"0","*17/*28":"6 ","*17/*29":"0","*17/*30":"0","*17/*31":"0","*17/*32":"0","*17/*33":"0","*17/*34":"0","*17/*35":"4 ","*18/*18":"5 ","*18/*19":"3","*18/*22":"4 ","*18/*23":"0","*18/*24":"4 ","*18/*25":"3","*18/*26":"3","*18/*27":"0","*18/*28":"5 ","*18/*29":"0","*18/*30":"0","*18/*31":"0","*18/*32":"0","*18/*33":"0","*18/*34":"0","*18/*35":"4 ","*19/*19":"3","*19/*22":"2","*19/*23":"0","*19/*24":"2","*19/*25":"3","*19/*26":"3","*19/*27":"0","*19/*28":"3","*19/*29":"0","*19/*30":"0","*19/*31":"0","*19/*32":"0","*19/*33":"0","*19/*34":"0","*19/*35":"2","*22/*22":"1","*22/*23":"0","*22/*24":"1","*22/*25":"2","*22/*26":"2","*22/*27":"0","*22/*28":"4 ","*22/*29":"0","*22/*30":"0","*22/*31":"0","*22/*32":"0","*22/*33":"0","*22/*34":"0","*22/*35":"1","*23/*23":"0","*23/*24":"0","*23/*25":"0","*23/*26":"0","*23/*27":"0","*23/*28":"0","*23/*29":"0","*23/*30":"0","*23/*31":"0","*23/*32":"0","*23/*33":"0","*23/*34":"0","*23/*35":"0","*24/*24":"1","*24/*25":"2","*24/*26":"2","*24/*27":"0","*24/*28":"4 ","*24/*29":"0","*24/*30":"0","*24/*31":"0","*24/*32":"0","*24/*33":"0","*24/*34":"0","*24/*35":"1","*25/*25":"3","*25/*26":"3","*25/*27":"0","*25/*28":"3","*25/*29":"0","*25/*30":"0","*25/*31":"0","*25/*32":"0","*25/*33":"0","*25/*34":"0","*25/*35":"2","*26/*26":"3","*26/*27":"0","*26/*28":"3","*26/*29":"0","*26/*30":"0","*26/*31":"0","*26/*32":"0","*26/*33":"0","*26/*34":"0","*26/*35":"2","*27/*27":"0","*27/*28":"0","*27/*29":"0","*27/*30":"0","*27/*31":"0","*27/*32":"0","*27/*33":"0","*27/*34":"0","*27/*35":"0","*28/*28":"5 ","*28/*29":"0","*28/*30":"0","*28/*31":"0","*28/*32":"0","*28/*33":"0","*28/*34":"0","*28/*35":"4 ","*29/*29":"0","*29/*30":"0","*29/*31":"0","*29/*32":"0","*29/*33":"0","*29/*34":"0","*29/*35":"0","*30/*30":"0","*30/*31":"0","*30/*32":"0","*30/*33":"0","*30/*34":"0","*30/*35":"0","*31/*31":"0","*31/*32":"0","*31/*33":"0","*31/*34":"0","*31/*35":"0","*32/*32":"0","*32/*33":"0","*32/*34":"0","*32/*35":"0","*33/*33":"0","*33/*34":"0","*33/*35":"0","*34/*34":"0","*34/*35":"0","*35/*35":"1"}
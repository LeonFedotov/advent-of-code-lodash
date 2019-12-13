const _ = require('lodash')
const input = `1102,34463338,34463338,63,1007,63,34463338,63,1005,63,53,1102,3,1,1000,109,988,209,12,9,1000,209,6,209,3,203,0,1008,1000,1,63,1005,63,65,1008,1000,2,63,1005,63,904,1008,1000,0,63,1005,63,58,4,25,104,0,99,4,0,104,0,99,4,17,104,0,99,0,0,1101,20,0,1007,1101,0,197,1022,1102,475,1,1028,1102,30,1,1008,1101,25,0,1010,1102,1,23,1009,1101,0,22,1013,1101,470,0,1029,1102,24,1,1014,1102,1,39,1005,1101,31,0,1003,1101,807,0,1026,1101,0,26,1018,1102,1,804,1027,1101,0,0,1020,1102,1,38,1017,1101,0,27,1016,1102,443,1,1024,1101,0,36,1006,1102,21,1,1015,1101,28,0,1001,1102,33,1,1019,1102,1,37,1011,1102,1,190,1023,1101,0,434,1025,1101,34,0,1004,1102,1,1,1021,1101,0,29,1012,1102,1,32,1002,1101,35,0,1000,109,30,2105,1,-7,1001,64,1,64,1105,1,199,4,187,1002,64,2,64,109,-23,2101,0,-5,63,1008,63,32,63,1005,63,225,4,205,1001,64,1,64,1105,1,225,1002,64,2,64,109,7,2102,1,-5,63,1008,63,23,63,1005,63,251,4,231,1001,64,1,64,1106,0,251,1002,64,2,64,109,-16,2101,0,2,63,1008,63,33,63,1005,63,275,1001,64,1,64,1106,0,277,4,257,1002,64,2,64,109,10,21102,40,1,4,1008,1012,40,63,1005,63,299,4,283,1106,0,303,1001,64,1,64,1002,64,2,64,109,7,2102,1,-9,63,1008,63,33,63,1005,63,327,1001,64,1,64,1105,1,329,4,309,1002,64,2,64,109,-17,2107,34,2,63,1005,63,347,4,335,1105,1,351,1001,64,1,64,1002,64,2,64,109,1,1201,8,0,63,1008,63,23,63,1005,63,375,1001,64,1,64,1106,0,377,4,357,1002,64,2,64,109,-4,2108,31,8,63,1005,63,395,4,383,1105,1,399,1001,64,1,64,1002,64,2,64,109,3,1201,8,0,63,1008,63,36,63,1005,63,421,4,405,1105,1,425,1001,64,1,64,1002,64,2,64,109,25,2105,1,1,4,431,1001,64,1,64,1105,1,443,1002,64,2,64,109,-3,1205,0,459,1001,64,1,64,1106,0,461,4,449,1002,64,2,64,109,-2,2106,0,10,4,467,1106,0,479,1001,64,1,64,1002,64,2,64,109,12,1206,-9,495,1001,64,1,64,1106,0,497,4,485,1002,64,2,64,109,-39,1207,9,36,63,1005,63,519,4,503,1001,64,1,64,1105,1,519,1002,64,2,64,109,11,1202,-1,1,63,1008,63,28,63,1005,63,541,4,525,1105,1,545,1001,64,1,64,1002,64,2,64,109,6,2107,24,1,63,1005,63,565,1001,64,1,64,1106,0,567,4,551,1002,64,2,64,109,1,1207,-3,35,63,1005,63,583,1106,0,589,4,573,1001,64,1,64,1002,64,2,64,109,1,21102,41,1,5,1008,1015,40,63,1005,63,613,1001,64,1,64,1105,1,615,4,595,1002,64,2,64,109,-2,2108,22,1,63,1005,63,635,1001,64,1,64,1105,1,637,4,621,1002,64,2,64,109,-10,1208,4,33,63,1005,63,653,1106,0,659,4,643,1001,64,1,64,1002,64,2,64,109,16,1206,6,673,4,665,1106,0,677,1001,64,1,64,1002,64,2,64,109,-4,1202,-8,1,63,1008,63,35,63,1005,63,701,1001,64,1,64,1105,1,703,4,683,1002,64,2,64,109,13,21108,42,42,-8,1005,1015,721,4,709,1105,1,725,1001,64,1,64,1002,64,2,64,109,-18,21107,43,44,5,1005,1010,743,4,731,1106,0,747,1001,64,1,64,1002,64,2,64,109,-11,1208,8,32,63,1005,63,765,4,753,1106,0,769,1001,64,1,64,1002,64,2,64,109,15,21101,44,0,5,1008,1014,47,63,1005,63,789,1105,1,795,4,775,1001,64,1,64,1002,64,2,64,109,13,2106,0,5,1106,0,813,4,801,1001,64,1,64,1002,64,2,64,109,-12,21108,45,43,0,1005,1010,829,1106,0,835,4,819,1001,64,1,64,1002,64,2,64,109,-4,21107,46,45,10,1005,1016,855,1001,64,1,64,1106,0,857,4,841,1002,64,2,64,109,3,21101,47,0,5,1008,1014,47,63,1005,63,883,4,863,1001,64,1,64,1106,0,883,1002,64,2,64,109,10,1205,2,901,4,889,1001,64,1,64,1105,1,901,4,64,99,21102,27,1,1,21102,915,1,0,1106,0,922,21201,1,13433,1,204,1,99,109,3,1207,-2,3,63,1005,63,964,21201,-2,-1,1,21101,0,942,0,1106,0,922,22102,1,1,-1,21201,-2,-3,1,21102,1,957,0,1105,1,922,22201,1,-1,-2,1106,0,968,21202,-2,1,-2,109,-3,2106,0,0`
const { exec } = require('./day9')

_
	.chain(input)
	.thru(exec)
	.thru((i) => (i.next(), i.next(2)).value)
	.first()
	.tap(console.log)
	.value()

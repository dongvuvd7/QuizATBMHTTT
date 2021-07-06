// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Mô hình tổng quát đảm bảo an toàn thông tin và hệ thống thông tin thường gồm các lớp:",
    answer: "An ninh tổ chức, An ninh mạng và An ninh hệ thống",
    options: [
      "An ninh tổ chức, An ninh mạng và Điều khiển truy cập",
      "An ninh tổ chức, Tưởng lửa và Điều khiển truy cập",
      "An ninh tổ chức, An ninh mạng và An toàn hệ điều hành và ứng dụng",
      "An ninh tổ chức, An ninh mạng và An ninh hệ thống"
    ]
},

{
    numb: 2,
    question: "An toàn thông tin gồm hai lĩnh vực chính là",
    answer: "An toàn công nghệ thông tin và Đảm bảo thông tin",
    options: [
      "An ninh mạng và An toàn hệ thống",
      "An toàn máy tính và An toàn Internet",
      "An toàn máy tính và An ninh mạng",
      "An toàn công nghệ thông tin và Đảm bảo thông tin",

    ]
},

{
    numb: 3,
    question: "Tại sao cần phải đảm bảo an toàn cho thông tin?",
    answer: "Do có nhiều thiết bị kết nối mạng Internet với nhiều nguy cơ và đe dọa",
    options: [
      "Do có nhiều thiết bị kết nối mạng Internet với nhiều nguy cơ và đe dọa",
      "Do có quá nhiều phần mềm độc hại",
      "Do có quá nhiều nguy cơ tấn công mạng",
      "Do có nhiều thiết bị kết nối mạng Internet",

    ]
},

{
    numb: 4,
    question: "An toàn hệ thống thông tin là",
    answer: "Việc đảm bảo các thuộc tính an ninh, an toàn của hệ thống thông tin",
    options: [
      "Việc đảm bảo thông tin trong hệ thống không bị đánh cắp",
      "Việc đảm bảo cho hệ thống thông tin hoạt động trơn tru, ổn định",
      "Việc đảm bảo cho hệ thống thông tin không bị tấn công",
      "Việc đảm bảo các thuộc tính an ninh, an toàn của hệ thống thông tin",
    ]
},

{
    numb: 5,
    question: "Người sử dụng hệ thống thông tin quản lý trong mô hình 4 loại hệ thống thông tin là?",
    answer: "Quản lý bộ phận",
    options: [
      "Quản lý cao cấp",
      "Giám đốc điều hành",
      "Nhân viên",
      "Quản lý bộ phận",

    ]
},

{
    numb: 6,
    question: " Nguyên tắc cơ bản cho đảm bảo an toàn thông tin, hệ thống và mạng là: ?",
    answer: "Phòng vệ nhiều lớp có chiều sâu",
    options: [
      "Phòng vệ nhiều lớp có chiều sâu",
      "Cần đầu tư trang thiết bị và chuyên gia đảm bảo an toàn",
      "Cần mua sắm và lắp đặt nhiều thiết bị an ninh chuyên dụng",
      "Cân bằng giữa tính hữu dụng, chi phí và tính năng",
      
    ]
},

{
    numb: 7,
    question: "Một trong các nội dung rất quan trọng của quản lý an toàn thông tin là?",
    answer: "Quản lý hệ thống",
    options: [
      "Quản lý các ứng dụng",      
      "Quản lý hệ thống",         
      "Quản lý hệ điều hành",
      "Quản lý rủi ro",
      
    ]
},
{
    numb: 8,
    question: "Một thông điệp có nội dung nhạy cảm truyền trên mạng bị sửa đổi. Các thuộc tính an toàn thông tin nào bị vi phạm?",
    answer: "Bí mật và Toàn vẹn",
    options: [
      "Bí mật, Toàn vẹn và sẵn dùng",
      "Bí mật và Toàn vẹn",
      "Bí mật",
      "Toàn vẹn",
      
    ]
},
{
    numb: 9,
    question: "Nguy cơ bị tấn công từ chối dịch vụ (DoS) và từ chối dịch vụ phân tán (DDoS) thường gặp ở vùng nào trong 7 vùng cơ sở hạ tầng CNTT :",
    answer: "Vùng mạng WAN",
    options: [
      "Vùng máy trạm",
      "Vùng mạng WAN",
      "Vùng mạng LAN-to-WAN",
      "Vùng mạng LAN",
      
    ]
},
{
    numb: 10,
    question: "An toàn thông tin (Information Security) là gì",
    answer: "Là việc bảo vệ chống truy nhập, sử dụng, tiết lộ, sửa đổi, hoặc phá hủy thông tin một cách trái phép",
    options: [
      "Là việc phòng chống đánh cắp thông tin",
      "Là việc bảo vệ chống truy nhập, sử dụng, tiết lộ, sửa đổi, hoặc phá hủy thông tin một cách trái phép",
      "Là việc bảo vệ chống sử dụng, tiết lộ, sửa đổi, vận chuyển hoặc phá hủy thông tin một cách trái phép",
      "Là việc phòng chống tấn công mạng",
      
    ]
},
{
    numb: 11,
    question: "Tìm phát biểu đúng trong các phát biểu sau ?",
    answer: "Mối đe dọa là bất kỳ một hành động nào có thể gây hư hại đến các tài nguyên hệ thống",
    options: [
      "Mối đe dọa là bất kỳ một hành động tấn công nào vào hệ thống mạng",
      "Mối đe dọa là bất kỳ một hành động nào có thể gây hư hại đến các tài nguyên hệ thống",
      "Mối đe dọa là bất kỳ một hành động tấn công nào vào hệ thống máy tính",
      "Mối đe dọa là bất kỳ một hành động tấn công nào vào hệ thống máy tính và mạng",
      
    ]
},
{
    numb: 12,
    question: "Đây là một trong các biện pháp phòng chống tấn công khai thác lỗi tràn bộ đệm?",
    answer: "Sử dụng cơ chế cẩm thực hiện mã trong dữ liệu",
    options: [
      "Sử dụng tường lửa",
      "Sử dụng công nghệ xác thực mạnh",
      "Sử dụng các kỹ thuật mật mã",
      "Sử dụng cơ chế cẩm thực hiện mã trong dữ liệu",
      
    ]
},
{
    numb: 13,
    question: "Trong tấn công khai thác lỗi tràn bộ đệm, tin tặc thường sử dụng một số lệnh NOP (No Operation) ở phần đầu của mã tấn công. Mục đích của việc này là để:",
    answer: "Tăng khả năng gây tràn bộ đệm",
    options: [
      "Tăng khả năng phá hoại của mã tấn công",
      "Tăng khả năng gây tràn bộ đệm",
      "Tăng khả năng mã tấn công được thực hiện",
      "Tăng khả năng gây lỗi chương trình",
      
    ]
},
{
    numb: 14,
    question: "Tìm phát biểu đúng trong các phát biểu sau:",
    answer: "Điểm yếu hệ thống có thể xuất hiện trong cả các mô đun phần cứng và phần mềm",
    options: [
      "Điểm yếu hệ thống chỉ xuất hiện trong các mô đun phần mềm",
      "Điểm yếu chỉ xuất hiện khi hệ thống bị tấn công",
      "Điểm yếu hệ thống có thể xuất hiện trong cả các mô đun phần cứng và phần mềm",
      "Điểm yếu hệ thống chỉ xuất hiện trong các mô đun phần cứng",
      
    ]
},
{
    numb: 15,
    question: "Các vùng bộ nhớ thường bị tràn gồm ?",
    answer: "Ngăn xếp (Stack) và vùng nhớ cấp phát động (Heap)",
    options: [
      "Ngăn xếp (Stack) và vùng nhớ cấp phát động (Heap)",
      "Ngăn xếp (Stack) và Bộ nhớ đệm (Cache)",
      "Hàng đợi (Queue) và vùng nhớ cấp phát động (Heap)",
      "Hàng đợi (Queue) và Ngăn xếp (Stack)",
      
    ]
},
{
    numb: 16,
    question: "Các thành phần chính của hệ thống máy tính gồm ?",
    answer: "CPU, Bộ nhớ, HDD và Hệ thống bus truyền dẫn",
    options: [
      "CPU, Bộ nhớ, HDD, hệ điều hành và các ứng dụng",
      "CPU, hệ điều hành và các ứng dụng",
      "Hệ thống phần cứng và Hệ thống phần mềm",
      "CPU, Bộ nhớ, HDD và Hệ thống bus truyền dẫn",

    ]
},
{
    numb: 17,
    question: "Nguyên nhân của sự tồn tại các điểm yếu trong hệ thống có thể do?",
    answer: "Lỗi thiết kế, lỗi cài đặt và lập trình",
    options: [
      "Lỗi thiết kế, lỗi cài đặt và lập trình",
      "Tất cả các khâu trong quá trình phát triển và vận hành",
      "Lỗi quản trị",
      "Lỗi cấu hình hoạt động",
      
    ]
},
{
    numb: 18,
    question: "Trên thực tế, có thể giảm khả năng bị tấn công nếu có thể... ?",
    answer: "Giảm thiểu các lỗ hổng bảo mật",
    options: [
      "Triệt tiêu được hết các nguy cơ",
      "Triệt tiêu được hết các mối đe dọa",
      "Giảm thiểu các lỗ hổng bảo mật",
      "Kiểm soát chặt chẽ người dùng",
      
    ]
},
{
    numb: 19,
    question: "Sâu SQL Slammer tấn công khai thác lỗi tràn bộ đệm trong hệ quản trị cơ sở dữ liệu ?",
    answer: "SQL Server 2000",
    options: [
      "SQL Server 2012",
      "SQL Server 2000",
      "SQL Server 2008",
      "SQL Server 2003 ",
      
    ]
},
{
    numb: 20,
    question: "Các lỗ hổng bảo mật thường tồn tại nhiều nhất trong thành phần nào của hệ thống ?",
    answer: "Hệ điều hành",
    options: [
      "Hệ điều hành",
      "Các dịch vụ mạng",
      "Các ứng dụng",
      "Các thành phần phần cứng",
      
    ]
},
{
    numb: 21,
    question: "Các kỹ thuật và công cụ thường được sử dụng trong an ninh mạng bao gồm?",
    answer: "Điều khiển truy nhập, tường lửa, proxy và các giao thức bảo mật, ứng dụng dựa trên mật mã",
    options: [
      "VPN, SSL/TLS, PGP",
      "Điều khiển truy nhập",
      "Điều khiển truy nhập, tường lửa, proxy và các giao thức bảo mật, ứng dụng dựa trên mật mã",
      "Tường lửa, proxy",
      
    ]
},
{
    numb: 22,
    question: "Các thành phần của an toàn thông tin gồm?",
    answer: "An toàn máy tính và dữ liệu, An ninh mạng, Quản lý ATTT và Chính sách ATTT",
    options: [
      "An toàn máy tính, An ninh mạng, Quản lý ATTT và Chính sách ATTT",
      "An toàn máy tính và dữ liệu, An ninh mạng, Quản lý ATTT và Chính sách ATTT",
      "An toàn máy tính, An ninh mạng, Quản lý rủi ro ATTT và Chính sách ATTT",
      "An toàn máy tính, An toàn dữ liệu, An ninh mạng, Quản lý ATTT",
      
    ]
},
{
    numb: 23,
    question: "Trong tấn công khai thác lỗi tràn bộ đệm, tin tặc thường sử dụng shellcode. Shellcode đó là dạng: ?",
    answer: "Mã máy",
    options: [
      "Mã Java",
      "Mã C/C++",
      "Mã máy",
      "Mã Hợp ngữ",
      
    ]
},
{
    numb: 24,
    question: "Các yêu cầu cơ bản trong đảm bảo an toàn thông tin và an toàn hệ thống thông tin gồm: ?",
    answer: "Bí mật, Toàn vẹn và Sẵn dùng",
    options: [
      "Bảo mật, Toàn vẹn và Khả dụng",
      "Bảo mật, Toàn vẹn và Sẵn dùng",
      "Bí mật, Toàn vẹn và Sẵn dùng",
      "Bí mật, Toàn vẹn và không chối bỏ",
      
    ]
},
{
    numb: 25,
    question: "Việc thực thi quản lý ATTT cần được thực hiện theo chu trình lặp lại là do",
    answer: "Các điều kiện bên trong và bên ngoài hệ thống thay đổi theo thời gian",
    options: [
      "Các điều kiện bên trong và bên ngoài hệ thống thay đổi theo thời gian",
      "Trình độ cao của tin tặc và công cụ tấn công ngày càng phổ biến",
      "Số lượng và khả năng phá hoại của các phần mềm độc hại ngày càng tăng",
      "Máy tính, hệ điều hành và các phần mềm được nâng cấp nhanh chóng",
      
    ]
},
{
    numb: 26,
    question: "Hệ thống thông tin là ?",
    answer: "Một hệ thống tích hợp các thành phần nhằm phục vụ việc thu thập, lưu trữ, xử lý thông tin, chuyển giao thông tin, tri thức và các sản phẩm số",
    options: [
      "Một hệ thống tích hợp các thành phần nhằm phục vụ việc thu thập, lưu trữ, xử lý thông tin, chuyển giao thông tin, tri thức và các sản phẩm số",
      "Một hệ thống gồm các thành phần phần cứng và phần mềm nhằm phục vụ việc thu thập, lưu trữ, xử lý thông tin, chuyển giao thông tin",
      "Một hệ thống gồm các thành phần phần cứng nhằm phục vụ việc thu thập, lưu trữ, xử lý thông tin, chuyển giao thông tin, tri thức và các sản phẩm số",
      "Một hệ thống gồm các thành phần phần mềm nhằm phục vụ việc thu thập, lưu trữ, xử lý thông tin, chuyển giao thông tin, tri thức và các sản phẩm số",
      
    ]
},
{
    numb: 27,
    question: "Trong tấn công khai thác lỗi tràn bộ đệm, tin tặc thường sử dụng một số lệnh NOP (No Operation) ở phần đầu của mã tấn công. Mục đích của việc này là để ?",
    answer: "Tăng khả năng gây tràn bộ đệm",
    options: [
      "Tăng khả năng phá hoại của mã tấn công",
      "Tăng khả năng gây lỗi chương trình",
      "Tăng khả năng gây tràn bộ đệm",
      "Tăng khả năng mã tấn công được thực hiện",
      
    ]
},
{
    numb: 28,
    question: "Tính bí mật của thông tin có thể được đảm bảo bằng ?",
    answer: "Bảo vệ vật lý, VPN, hoặc mã hóa",
    options: [
      "Bảo vệ vật lý",
      "Các kỹ thuật mã hóa",
      "sử dụng VPN",
      "Bảo vệ vật lý, VPN, hoặc mã hóa",
      
    ]
},
{
    numb: 29,
    question: "Lỗ hổng bảo mật (Security vulnerability) là một điểm yếu tồn tại trong một hệ thống cho phép tin tặc:",
    answer: "Khai thác nhằm chiếm quyền điều khiển hệ thống",
    options: [
      "Khai thác nhằm đánh cắp các thông tin trong hệ thống",
      "Khai thác gây tổn hại đến các thuộc tính an ninh của hệ thống đó",
      "Khai thác, tấn công phá hoại và gây tê liệt hệ thống",
      "Khai thác nhằm chiếm quyền điều khiển hệ thống",
      
    ]
},
{
    numb: 30,
    question: "Đảm bảo thông tin (Information assurance) thường được thực hiện bằng cách ?",
    answer: "Sử dụng kỹ thuật tạo dự phòng ngoại vi",
    options: [
      "Sử dụng kỹ thuật tạo dự phòng ra đĩa cứng",
      "Sử dụng kỹ thuật tạo dự phòng ra băng từ",
      "Sử dụng kỹ thuật tạo dự phòng ngoại vi",
      "Sử dụng kỹ thuật tạo dự phòng cục bộ",
      
    ]
},
{
    numb: 31,
    question: "Lỗi tràn bộ đệm là lỗi trong khâu ?",
    answer: "Lập trình phần mềm",
    options: [
      "Kiểm thử phần mềm",
      "Thiết kế phần mềm",
      "Lập trình phần mềm",
      "Quản trị phần mềm",
      
    ]
},
{
    numb: 32,
    question: "Đâu là dạng lỗ hổng bảo mật thường gặp trong hệ điều hành và các phần mềm ứng dụng ?",
    answer: "Lỗi tràn bộ đệm",
    options: [
      "Lỗi tràn bộ đệm",
      "Lỗi quản trị",
      "Lỗi cấu hình",
      "Lỗi thiết kế",
      
    ]
},
{
    numb: 33,
    question: "Quản lý các bản vá và cập nhật phần mềm là phần việc thuộc lớp bảo vệ nào trong mô hình tổng thể đảm bảo an toàn hệ thống thông tin?",
    answer: "Lớp an ninh hệ thống",
    options: [
      "Lớp an ninh mạng",
      "Lớp an ninh hệ thống",
      "Lớp an ninh cơ quan/tổ chức",
      "Lớp an ninh hệ điều hành và phần mềm",
      
    ]
},
{
    numb: 34,
    question: "Khi khai thác lỗi tràn bộ đệm, tin tặc thường chèn mã độc, gây tràn và ghi đè để sửa đổi thành phần nào sau đây của bộ nhớ Ngăn xếp để chuyển hướng nhằm thực hiện mã độc của mình ?",
    answer: "Địa chỉ trở về của hàm",
    options: [
      "Các biển đầu vào của hàm",
      "Bộ đệm hoặc biển cục bộ của hàm",
      "Con trỏ khung ngăn xếp (sfp)",
      "Địa chỉ trở về của hàm",
      
    ]
},
{
    numb: 35,
    question: "Khác biệt cơ bản của vi rút và sâu là ?",
    answer: "Sâu có khả năng tự lây lan mà không cần tương tác của người dùng",
    options: [
      "Vi rút có khả năng tự lây lan mà không cần tương tác của người dùng",
      "Sâu có khả năng tự lây lan mà không cần tương tác của người dùng",
      "Sâu Có khả năng phá hoại lớn lơn",
      "Vi rút có khả năng phá hoại lớn lớn",
      
    ]
},
{
    numb: 36,
    question: "Dạng tấn công gây ngắt quãng dịch vụ hoặc kênh truyền thông cho người dùng bình thường là ?",
    answer: "Interruptions",
    options: [
      "Interceptions",
      "Fabrications",
      "Interruptions",
      "Modifications",
      
    ]
},
{
    numb: 37,
    question: "Tấn công nghe lén là kiểu tấn công",
    answer: "Thụ động",
    options: [
      "Thụ động",
      "Chủ động",
      "Chiếm quyền điều khiển",
      "Chủ động và bị động",
      
    ]
},
{
    numb: 38,
    question: "Dạng tấn công chặn bắt thông tin truyền trên mạng để sửa đổi hoặc lạm dụng là:",
    answer: "Interceptions",
    options: [
      "Fabrications",
      "Modifications",
      "Interruptions",
      "Interceptions",
      
    ]
},
{
    numb: 39,
    question: "Có thể phòng chống tấn công Smurf bằng cách cấu hình các máy và router không trả lời...",
    answer: "Các yêu cầu ICMP hoặc các yêu cầu phát quảng bá",
    options: [
      "Các yêu cầu ICMP hoặc các yêu cầu phát quảng bá",
      "Các yêu cầu TCP hoặc các yêu cầu phát quảng bá",
      "Các yêu cầu UPD hoặc các yêu cầu phát quảng bá",
      "Các yêu cầu HTTP hoặc các yêu cầu phát quảng bá",
      
    ]
},
{
    numb: 40,
    question: "Đâu là một kỹ thuật tấn công Dos?",
    answer: "Smurf",
    options: [
      "UDP Ping",
      "DNS Cache Poisoning",
      "Smurf",
      "DNS spoofing",
      
    ]
},
{
    numb: 41,
    question: "Dạng tấn công giả mạo thông tin thường để đánh lừa người dùng thông thường là",
    answer: "Fabrications",
    options: [
      "Modifications",
      "Fabrications",
      "Interruptions",
      "Interceptions",
      
    ]
},
{
    numb: 42,
    question: "Kỹ thuật tấn công Smurf sử dụng giao thức ICMP và Cơ chế gửi…",
    answer: "Broadcast",
    options: [
      "Unicast",
      "Multicast",
      "Anycast",
      "Broadcast",
      
    ]
},
{
    numb: 43,
    question: "Trong tấn công DDoS phản chiếu hay gián tiếp, có sự tham gia của một số lượng lớn máy chủ trên mạng Internet không bị tin tặc chiếm quyền điều khiển. Các máy chủ này được gọi là…",
    answer: "Reflectors",
    options: [
      "Reflectors",
      "Injectors",
      "Requesters",
      "Forwarders",
      
    ]
},
{
    numb: 44,
    question: "Pharming là kiểu tấn công vào…",
    answer: "Máy khách/trình duyệt web",
    options: [
      "Máy chủ web",
      "Máy chủ cơ sở dữ liệu của trang web",
      "Máy chủ và máy khách web",
      "Máy khách/trình duyệt web",
      
    ]
},
{
    numb: 45,
    question: "Đây là một công cụ kiểm tra lỗ hổng tấn công chèn mã SQL trên các website ?",
    answer: "SQLmap",
    options: [
      "SQLCheck",
      "SQL Server",
      "SQLmap",
      "SQLite",
      
    ]
},
{
    numb: 46,
    question: "Khác biệt cơ bản giữa tấn công DoS và DDoS là",
    answer: "Phạm vi tấn công",
    options: [
      "Phạm vi tấn công",
      "Mức độ gây hại",
      "Kỹ thuật tấn công",
      "Tần suất tấn công",
      
    ]
},
{
    numb: 47,
    question: "Mục đích chính của tấn công giả mạo địa chỉ IP là ?",
    answer: "Để vượt qua các hàng rào kiểm soát an ninh",
    options: [
      "Để vượt qua các hệ thống IPS và IDS",
      "Để vượt qua các hàng rào kiểm soát an ninh",
      "Để đánh cắp các dữ liệu nhạy cảm trên máy trạm",
      "Để đánh cắp các dữ liệu nhạy cảm trên máy chủ",
      
    ]
},
{
    numb: 48,
    question: "Các máy tính ma/máy tính bị chiếm quyền điều khiển thường được tin tặc sử dụng để...",
    answer: "Đánh cắp dữ liệu từ máy chủ cơ sở dữ liệu",
    options: [
      "Gửi các yêu cầu tấn công chèn mã",
      "Đánh cắp dữ liệu từ máy chủ cơ sở dữ liệu",
      "Gửi thư rác, thư quảng cáo",
      "Thực hiện tấn công tràn bộ đệm",
      
    ]
},
{
    numb: 49,
    question: "Trong dạng tấn công vào mật khẩu dựa trên từ điển, tin tặc đánh cắp mật khẩu của người dùng bằng cách",
    answer: "Thử các từ có tần suất sử dụng cao làm mật khẩu trong từ điển",
    options: [
      "Tìm mật khẩu trong từ điển các mật khẩu",
      "Thử các từ có tần suất sử dụng cao làm mật khẩu trong từ điển",
      "Vét cận các mật khẩu có thể có",
      "Lắng nghe trên đường truyền để đánh cắp mật khẩu",
      
    ]
},
{
    numb: 50,
    question: "Một trong các phương thức lây lan thường gặp của sâu mạng là:",
    answer: "Lây lan thông qua khả năng thực thi từ xa",
    options: [
      "Lây lan thông qua sao chép các file",
      "Lây lan thông qua dịch vụ POP",
      "Lây lan thông qua khả năng thực thi từ xa",
      "Lây lan thông qua Microsoft Office",
      
    ]
},
{
    numb: 51,
    question: "Đây là một kỹ thuật tấn công Dos?",
    answer: "Ping of death",
    options: [
      "SYN requests",
      "DNS spoofing",
      "IP spoofing",
      "Ping of death",
      
    ]
},
{
    numb: 52,
    question: "Tấn công từ chối dịch vụ (Dos - Denial of Service Attacks) là dạng tấn công có khả năng...",
    answer: "Cản trở người dùng hợp pháp truy nhập các tài nguyên hệ thống",
    options: [
      "Gây hư hỏng phần cứng máy chủ",
      "Cản trở người dùng hợp pháp truy nhập các tài nguyên hệ thống",
      "Đánh cắp dữ liệu trong hệ thống",
      "Cản trở người dùng hợp pháp truy nhập các file dữ liệu của hệ thống",
      
    ]
},
{
    numb: 53,
    question: "Mật khẩu an toàn trong thời điểm hiện tại là mật khẩu có",
    answer: "Độ dài từ 8 ký tự trở lên, gồm chữ cái hoa, thường, chữ số và ký tự đặc biệt",
    options: [
      "Chứa các ký tự từ nhiều dạng ký tự",
      "Khả năng chống tấn công phát lại và chứa các ký tự từ nhiều dạng ký tự",
      "Độ dài từ 8 ký tự trở lên, gồm chữ cái hoa, thường, chữ số và ký tự đặc biệt",
      "Độ dài lớn hơn hoặc bằng 8 ký tự",
      
    ]
},
{
    numb: 54,
    question: "Một trong các mối đe dọa an toàn thông tin thường gặp là?",
    answer: "Phần mềm quảng cáo",
    options: [
      "Phần mềm nghe lén",
      "Phần mềm quảng cáo",
      "Phần mềm phá mã",
      "Phần mềm độc hại",
      
    ]
},
{
    numb: 55,
    question: "Nguy cơ cao nhất mà một cuộc tấn công chèn mã SQL có thể gây ra cho một hệ thống là ?",
    answer: "Chiếm quyền điều khiển hệ thống",
    options: [
      "Đánh cắp các thông tin trong cơ sở dữ liệu",
      "Chèn, xóa hoặc sửa đổi dữ liệu",
      "Vượt qua các khâu xác thực người dùng",
      "Chiếm quyền điều khiển hệ thống",
      
    ]
},
{
    numb: 56,
    question: "Một trong các biện pháp có thể sử dụng để phòng chống tấn công người đứng giữa là",
    answer: "Sử dụng chứng chỉ số để xác thực thông tin nhận dạng các bên",
    options: [
      "Sử dụng các hệ thống IPS/IDS",
      "Sử dụng chứng chỉ số để xác thực thông tin nhận dạng các bên",
      "Sử dụng mã hóa để đảm bảo tính bí mật các thông điệp truyền",
      "Sử dụng tường lửa để ngăn chặn",
      
    ]
},
{
    numb: 57,
    question: "Macro viruses là loại viruses thường lây nhiễm vào…",
    answer: "Các file tài liệu của bộ phần mềm Microsoft Office",
    options: [
      "Các file tài liệu của bộ phần mềm Open Office",
      "Các file tài liệu của bộ phần mềm Microsoft Exchange",
      "Các file tài liệu của bộ phần mềm Microsoft SQL",
      "Các file tài liệu của bộ phần mềm Microsoft Office",
      
    ]
},
{
    numb: 58,
    question: "Tấn công kiểu Social Engineering là dạng tấn công khai thác yếu tố nào sau đây trong hệ thống?",
    answer: "Người dùng",
    options: [
      "Máy trạm",
      "Người dùng",
      "Máy chủ",
      "Hệ điều hành & ứng dụng",
      
    ]
},
{
    numb: 59,
    question: "Câu lệnh SQL nào tin tặc thường sử dụng trong tấn công chèn mã SQL để đánh cắp các thông tin trong cơ sở dữ liệu?",
    answer: "UNION SELECT",
    options: [
      "UNION INSERT",
      "UNION SELECT",
      "SELECT UNION",
      "INSERT SELECT",
      
    ]
},
{
    numb: 60,
    question: "Phishing là một dạng của loại tấn công sử dụng...?",
    answer: "Kỹ thuật xã hội",
    options: [
      "Kỹ thuật chèn mã",
      "Kỹ thuật giả mạo địa chỉ IP",
      "Kỹ thuật gây tràn bộ đệm",
      "Kỹ thuật xã hội",
      
    ]
},
{
    numb: 61,
    question: "Các dạng phần mềm độc hại (malware) có khả năng tự nhân bản gồm?",
    answer: "Virus, worm, zombie",
    options: [
      "Virus, zombie, spyware",
      "Virus, trojan, zombie",
      "Virus, worm, trojan",
      "Virus, worm, zombie",
      
    ]
},
{
    numb: 62,
    question: "Một trong các cách virus thường sử dụng để lây nhiễm vào các chương trình khác là ?",
    answer: "Sửa đổi các chương trình",
    options: [
      "Ẩn mã của virus",
      "Thay thế các chương trình",
      "Xáo trộn mã của virus",
      "Sửa đổi các chương trình",
      
    ]
},
{
    numb: 63,
    question: "Trong tấn công DDoS phản chiếu hay gián tiếp, có sự tham gia của một số lượng lớn máy chủ trên mạng Internet không bị tin tặc chiếm quyền điều khiển. Các máy chủ này được gọi là...",
    answer: "Reflectors",
    options: [
      "Reflectors",
      "Requesters",
      "Forwarders",
      "Injectors",
      
    ]
},
{
    numb: 64,
    question: "Mục đích chính của tấn công giả mạo địa chỉ IP là",
    answer: "Để vượt qua các hàng rào kiểm soát an ninh",
    options: [
      "Để vượt qua các hệ thống IPS và IDS",
      "Để vượt qua các hàng rào kiểm soát an ninh",
      "Để đánh cắp các dữ liệu nhạy cảm trên máy trạm",
      "Để đánh cắp các dữ liệu nhạy cảm trên máy chủ",
      
    ]
},
{
    numb: 65,
    question: "Trojan horses là dạng phần mềm độc hại thường giành quyền truy nhập vào các file của người dùng khai thác cơ chế điều khiển truy nhập...",
    answer: "DAC",
    options: [
      "МАС",
      "Role-Based",
      "Rule-Based",
      "DAC",
      
    ]
},
{
    numb: 66,
    question: "Một trong các biện pháp hiệu quả để phòng chống Macro virus?",
    answer: "Cấm tự động thực hiện macro trong Microsoft Office",
    options: [
      "Cấm tự động thực hiện macro trong Microsoft Exchange",
      "Sử dụng tường lửa",
      "Cấm tự động thực hiện macro trong Microsoft Office",
      "Sử dụng IPS/IDS",
      
    ]
},
{
    numb: 67,
    question: "Đâu là một biện pháp phòng chống SYN Floods?",
    answer: "SYN Cache",
    options: [
      "SYN Firewalls",
      "SYN IDS",
      "SYN Proxy",
      "SYN Cache",
      
    ]
},
{
    numb: 68,
    question: "Các zombie thường được tin tặc sử dụng để?",
    answer: "Thực hiện tấn công DDoS",
    options: [
      "Đánh cắp dữ liệu từ máy chủ CSDL",
      "Thực hiện tấn công DoS",
      "Thực hiện tấn công tràn bộ đệm",
      "Thực hiện tấn công DDoS",
      
    ]
},
{
    numb: 69,
    question: "Tấn công kiểu Social Engineering có thể cho phép tin tặc?",
    answer: "Đánh cắp thông tin nhạy cảm của người dùng",
    options: [
      "Đánh cắp toàn bộ dữ liệu trên máy chủ",
      "Phá hỏng máy chủ",
      "Đánh cắp thông tin nhạy cảm trong cơ sở dữ liệu máy chủ",
      "Đánh cắp thông tin nhạy cảm của người dùng",
      
    ]
},
{
    numb: 70,
    question: "PGP đảm bảo tính bí mật thông điệp bằng cách sử dụng",
    answer: "Mã hóa khóa bất đối xứng sử dụng khóa công khai",
    options: [
      "Mã hóa khóa bất đối xứng sử dụng khóa phiên",
      "Mã hóa khóa đối xứng sử dụng khóa phiên",
      "Mã hóa khóa bất đối xứng sử dụng khóa công khai",
      "Mã hóa khóa đối xứng sử dụng khóa công khai",
      
    ]
},
{
    numb: 71,
    question: " Số lượng thao tác trong mỗi vòng xử lý của hàm băm MD5 là",
    answer: "16",
    options: [
      "14",
      "16",
      "18",
      "12",
      
    ]
},
{
    numb: 72,
    question: "Giao thức SSL sử dụng giao thức con SSL Handshake để khởi tạo phiên làm việc. SSL Handshake thực hiện việc trao đổi các khóa phiên dùng cho phiên làm việc dựa trên:",
    answer: "Mã hóa khóa công khai",
    options: [
      "Chữ ký số",
      "Mã hóa khóa bí mật",
      "Mã hóa khóa công khai",
      "Chứng chỉ số",
      
    ]
},
{
    numb: 73,
    question: "Các thuộc tính cơ bản của chứng chỉ số khóa công khai (Public key digital certificate) gồm?",
    answer: "Khóa công khai của chủ thể, thông tin định danh chủ thể, chữ ký của nhà cung cấp (CA)",
    options: [
      "Số nhận dạng, khóa riêng của chủ thể, chữ ký của nhà cung cấp CA",
      "Khóa công khai của chủ thể, thông tin địa chỉ chủ thể, thuật toán chữ ký sử dụng",
      "Số nhận dạng, khóa riêng của chủ thể, thông tin định danh chủ thể",
      "Khóa công khai của chủ thể, thông tin định danh chủ thể, chữ ký của nhà cung cấp (CA)",
      
    ]
},
{
    numb: 74,
    question: "Một hệ mã hóa (cryptosystem) được cấu thành từ hai thành phần chính gồm",
    answer: "Phương pháp mã hóa và không gian khóa",
    options: [
      "Phương pháp mã hóa và chia khối",
      "Giải thuật mã hóa và ký số",
      "Phương pháp mã hóa và không gian khóa",
      "Giải thuật mã hóa và giải mã",
      
    ]
},
{
    numb: 75,
    question: "Đây là một phương pháp mã hóa?",
    answer: "XOR",
    options: [
      "OR",
      "AND",
      "NOT",
      "XOR",
      
    ]
},
{
    numb: 76,
    question: "Kích thước khối dữ liệu xử lý của giải thuật mã hóa AES là?",
    answer: "128 bit",
    options: [
      "160 bit",
      "64 bit",
      "192 bít",
      "128 bit",
      
    ]
},
{
    numb: 77,
    question: "Điểm khác nhau chính giữa hai loại hàm băm MDC và MAC là: ",
    answer: "MDC là loại hàm băm không khóa, còn MAC là loại hàm băm có khóa",
    options: [
      "MDC là loại hàm băm không khóa, còn MAC là loại hàm băm có khóa",
      "MDC có khả năng chống đụng độ cao hơn MAC",
      "MDC an toàn hơn MAC",
      "MAC an toàn hơn MDC",
      
    ]
},
{
    numb: 78,
    question: "Chữ ký số (sử dụng riêng) thường được sử dụng để đảm bảo thuộc tính nào sau đây của thông điệp truyền đưa ?",
    answer: "Tính toàn vẹn",
    options: [
      "Tính bí mật",
      "Tính không chối bỏ",
      "Tính sẵn dùng",
      "Tính toàn vẹn",
      
    ]
},
{
    numb: 79,
    question: "Trong hệ chữ ký số RSA, việc tạo chữ ký số cho một thông điệp cần sử dụng một khóa. Khóa đó là:",
    answer: "Khóa riêng của người gửi",
    options: [
      "Khóa riêng của người nhận",
      "Khóa công khai của người nhận",
      "Khóa công khai của người gửi",
      "Khóa riêng của người gửi",
      
    ]
},
{
    numb: 80,
    question: "Một trong các điểm yếu của các hệ mã hóa khóa công khai là ?",
    answer: "Tốc độ chậm",
    options: [
      "Khó cài đặt trên thực tế",
      "Khó khăn trong quản lý và phân phối khóa",
      "Tốc độ chậm",
      "Độ an toàn thấp",
      
    ]
},
{
    numb: 81,
    question: "Phát biểu nào sau đây về chữ ký số là chính xác: ",
    answer: "Chữ ký số là một chuỗi dữ liệu liên kết với một thông điệp và thực thể tạo ra thông điệp",
    options: [
      "Chữ ký số là một chuỗi dữ liệu được tạo ra bằng cách mã hóa thông điệp sử dụng khóa bí mật",
      "Chữ ký số là một chuỗi dữ liệu liên kết với một thông điệp và thực thể tạo ra thông điệp",
      "Chữ ký số được sử dụng để đảm bảo tính bí mật và toàn vẹn thông điệp",
      "Chữ ký số được sử dụng để đảm bảo tính bí mật, toàn vẹn và xác thực thông điệp",
      
    ]
},
{
    numb: 82,
    question: "Hai thuộc tính cơ bản quan trọng nhất của một hàm băm là",
    answer: "Nén và dễ tính toán",
    options: [
      "Nén và một chiều",
      "Dễ tính toán và có đầu ra cố định",
      "Một chiều và đầu ra cố định",
      "Nén và dễ tính toán",
      
    ]
},
{
    numb: 83,
    question: "Độ an toàn của hệ mật mã RSA dựa trên...",
    answer: "Tính khó của việc phân tích số nguyên rất lớn",
    options: [
      "Độ phức tạp cao của giải thuật RSA",
      "Chi phí tính toán lớn",
      "Tính khó của việc phân tích số nguyên rất lớn",
      "Khóa có kích thước lớn",
      
    ]
},
{
    numb: 84,
    question: "Khi sinh cặp khóa RSA, các số nguyên tố p và q nên được chọn với kích thước… ?",
    answer: "Bằng khoảng một nửa kích thước của modulo n",
    options: [
      "p càng lớn càng tốt ",
      "Bằng khoảng một nửa kích thước của modulo n",
      "Không có yêu cầu về kích thước của p và q",
      "q càng lớn càng tốt",
      
    ]
},
{
    numb: 85,
    question: "Tìm phát biểu đúng về mã hóa khóa bất đối xứng (Asymmetric key cryptography):",
    answer: "Sử dụng một khóa quá trình mã hóa và một khóa khác cho giải mã",
    options: [
      "An toàn hơn mã hóa khóa bí mật",
      "Sử dụng một khóa quá trình mã hóa và một khóa khác cho giải mã",
      "Chỉ sử dụng kỹ thuật mã hóa khối",
      "Sử dụng một khóa chung cho cả quá trình mã hóa và giải mã",
      
    ]
},
{
    numb: 86,
    question: "Tìm phát biểu đúng về mã hóa khóa đối xứng (Symmetric key cryptography):",
    answer: "Sử dụng một khóa chung cho cả quá trình mã hóa và giải mã",
    options: [
      "Sử dụng một khóa chung cho cả quá trình mã hóa và giải mã",
      "Sử dụng một khóa quá trình mã hóa và một khóa khác cho giải mã",
      "An toàn hơn mã hóa khóa công khai",
      "Chỉ sử dụng kỹ thuật mã hóa khối",

    ]
},
{
    numb: 87,
    question: "Sử dụng kết hợp chứng chỉ số khóa công khai và chữ ký số có thể đảm bảo",
    answer: "Xác thực thực thể và toàn vẹn thông tin truyền",
    options: [
      "Xác thực thực thể và toàn vẹn thông tin truyền",
      "Xác thực thực thể và bí mật thông tin truyền",
      "Bí mật và xác thực nguồn gốc thông tin truyền",
      "Bí mật và toàn vẹn thông tin truyền",
      
    ]
},
{
    numb: 88,
    question: "Số lượng vòng lặp chính thực hiện xáo trộn dữ liệu theo hàm Feistel (F) trong giải thuật DES là: ",
    answer: "16",
    options: [
      "14",
      "16",
      "18",
      "20",
      
    ]
},
{
    numb: 89,
    question: "Các hộp thay thế s-box trong giải thuật DES có số bít đầu vào và đầu ra tương ứng là ?",
    answer: "Vào 6 bít và ra 4 bít",
    options: [
      "Vào 4 bít và ra 4 bít",
      "Vào 6 bít và ra 6 bít",
      "Vào 8 bít và ra 6 bít",
      "Vào 6 bít và ra 4 bít",
      
    ]
},
{
    numb: 90,
    question: "Một trong các ứng dụng phổ biến của các hàm băm là để tạo chuỗi...",
    answer: "Checksum",
    options: [
      "CheckError",
      "CheckTotal",
      "CheckNum",
      "Checksum",
      
    ]
},
{
    numb: 91,
    question: "PGP đảm bảo tính bí mật thông điệp bằng cách sử dụng ?",
    answer: "Mã hóa khóa bất đối xứng sử dụng khóa công khai",
    options: [
      "Mã hóa khóa bất đối xứng sử dụng khóa công khai",
      "Mã hóa khóa đối xứng sử dụng khóa phiên",
      "Mã hóa khóa đối xứng sử dụng khóa công khai",
      "Mã hóa khóa bất đối xứng sử dụng khóa phiên",
      
    ]
},
{
    numb: 92,
    question: "Trong quá trình xử lý thông điệp đầu vào tạo chuỗi băm, số lượng vòng xử lý của hàm băm SHA1 là:",
    answer: "80",
    options: [
      "80",
      "90",
      "60",
      "70",
      
    ]
},
{
    numb: 93,
    question: "Giải thuật mã hóa AES được thiết kế dựa trên…",
    answer: "mạng hoán vị-thay thế",
    options: [
      "mạng hoán vị-vernam",
      "mạng xor-thay thế",
      "mạng hoán vị-thay thế",
      "mạng hoán vị-xor",
      
    ]
},
{
    numb: 94,
    question: "Một trong các điểm yếu của các hệ mã hóa khóa đối xứng là ?",
    answer: "Khó khăn trong quản lý và phân phối khóa",
    options: [
      "Chi phí tính toán lớn",
      "Khó khăn trong quản lý và phân phối khóa",
      "Độ an toàn thấp",
      "Khó khăn trong cài đặt và triển khai hệ thống",
      
    ]
},
{
    numb: 95,
    question: "Số vòng lặp chuyển đổi cần thực hiện để chuyển bản rõ thành bản mã của giải thuật mã hóa AES với khóa 192 bít là: ?",
    answer: "12",
    options: [
      "10",
      "12",
      "16",
      "14",
      
    ]
},
{
    numb: 96,
    question: "Phát biểu nào sau đây về chữ ký số là chính xác ?",
    answer: "Chữ ký số là một chuỗi dữ liệu liên kết với một thông điệp và thực thể tạo ra thông điệp",
    options: [
      "Chữ ký số là một chuỗi dữ liệu được tạo ra bằng cách mã hóa thông điệp sử dụng khóa bí mật",
      "Chữ ký số là một chuỗi dữ liệu liên kết với một thông điệp và thực thể tạo ra thông điệp",
      "Chữ ký số được sử dụng để đảm bảo tính bí mật, toàn vẹn và xác thực thông điệp",
      "Chữ ký số được sử dụng để đảm bảo tính bí mật và toàn vẹn thông điệp",
      
    ]
},
{
    numb: 97,
    question: "Một trong các ứng dụng phổ biến của các hàm băm một chiều là để...",
    answer: "Mã hóa mật khẩu",
    options: [
      "Mã hóa thẻ tín dụng",
      "Mã hóa địa chỉ",
      "Mã hóa mật khẩu",
      "Mã hóa tên tài khoản",
      
    ]
},
{
    numb: 98,
    question: "Giao thức SSL sử dụng giao thức con SSL Handshake để khởi tạo phiên làm việc. SSL Handshake thực hiện việc xác thực thực thể dựa trên:",
    answer: "Chứng chỉ số khóa công khai",
    options: [
      "Chứng chỉ số khóa công khai",
      "Mã hóa khóa bí mật",
      "Mã hóa khóa công khai",
      "Chữ ký số",
      
    ]
},
{
    numb: 99,
    question: "PGP đảm bảo tính xác thực thông điệp bằng cách?",
    answer: "Sử dụng hàm băm có khóa MAC",
    options: [
      "Mã hóa/giải mã thông điệp",
      "Sử dụng hàm băm có khóa MAC",
      "Sử dụng hàm băm không khóa MDC",
      "Tạo và kiểm tra chữ ký số",
      
    ]
},
{
    numb: 100,
    question: "Nguyên tắc bảo mật tài nguyên của mô hình Bell-La Padula là",
    answer: "Đọc xuống và ghi lên",
    options: [
      "Đọc lên và ghi lên",
      "Đọc xuống và ghi xuống",
      "Đọc xuống và ghi lên",
      "Đọc lên và ghi xuống",
      
    ]
},
{
    numb: 101,
    question: "Tính bảo mật của kỹ thuật điều khiển truy nhập sử dụng mật khẩu dựa trên ?",
    answer: "Độ khó đoán và tuổi thọ của mật khẩu",
    options: [
      "Tần suất sử dụng mật khẩu",
      "Kích thước của mật khẩu",
      "Độ khó đoán và tuổi thọ của mật khẩu",
      "Số loại ký tự dùng trong mật khẩu",
      
    ]
},
{
    numb: 102,
    question: "Phát hiện tấn công, xâm nhập dựa trên bất thường có tiềm năng phát hiện các loại tấn công, xâm nhập mới là do ?",
    answer: "Không yêu cầu biết trước thông tin về chúng",
    options: [
      "Không yêu cầu biết trước thông tin về chúng",
      "Đã có chữ ký của các tấn công, xâm nhập mới",
      "Các tấn công, xâm nhập mới thường dễ nhận biết",
      "Không yêu cầu xây dựng cơ sở dữ liệu các chữ ký",
      
    ]
},
{
    numb: 103,
    question: "Một trong các điểm yếu làm giảm hiệu quả của phát hiện tấn công, xâm nhập dựa trên bất thường là ?",
    answer: "Tỷ lệ cảnh báo sai cao",
    options: [
      "Không có khả năng ngăn chặn tấn công, đột nhập",
      "Không có khả năng phát hiện các cuộc tấn công Dos",
      "Tỷ lệ cảnh báo sai cao",
      "Không có khả năng phát hiện tấn công, xâm nhập mới",
      
    ]
},
{
    numb: 104,
    question: "Phát hiện tấn công, xâm nhập dựa trên bất thường dựa trên giá thiết ?",
    answer: "Các hành vi tấn công, xâm nhập thường có quan hệ chặt chẽ với các hành vi bất thường",
    options: [
      "Các hành vi tấn công, xâm nhập thường có quan hệ chặt chẽ với các hành vi bất thường",
      "Các hành vi tấn công, xâm nhập gây ngắt quãng dịch vụ cung cấp cho người dùng",
      "Các hành vi tấn công, xâm nhập có quan hệ chặt chẽ với các dịch vụ được cung cấp",
      "Các hành vi tấn công, xâm nhập gây tổn hại nghiêm trọng cho hệ thống",
      
    ]
},
{
    numb: 105,
    question: "Ưu điểm của điều khiển truy nhập dựa trên các đặc điểm sinh trắc học là ?",
    answer: "Bảo mật cao và luôn đi cùng với chủ thể",
    options: [
      "Bảo mật cao và độ ổn định cao",
      "Bảo mật cao và chi phí thấp",
      "Bảo mật cao và luôn đi cùng với chủ thể",
      "Bảo mật cao và được hỗ trợ rộng rãi",
      
    ]
},
{
    numb: 106,
    question: "Một ưu điểm của tường lửa có trạng thái so với tường lửa không trạng thái là",
    answer: "Phân biệt được các gói tin thuộc về các kết nối mạng khác nhau",
    options: [
      "Lọc nội dung gói tốt hơn",
      "Nhận dạng được các dạng tấn công và các phần mềm độc hại",
      "Chạy nhanh hơn",
      "Phân biệt được các gói tin thuộc về các kết nối mạng khác nhau",
    ]
},
{
    numb: 107,
    question: "Các phương pháp xử lý, phân tích dữ liệu và mô hình hoá trong phát hiện tấn công, xâm nhập dựa trên bất thường, gồm",
    answer: "Thống kê, học máy, khai phá dữ liệu",
    options: [
      "Thống kê, học máy, khai phá dữ liệu",
      "Học máy, khai phá dữ liệu, agents",
      "Thống kê, học máy, đồ thị",
      "Thống kê, đối sánh chuỗi, đồ thị",
      
    ]
},
{
    numb: 108,
    question: "Phát biểu nào sau đây đúng với cơ chế điều khiển truy nhập dựa trên vai trò - RBAC?",
    answer: "RBAC cấp quyền truy nhập dựa trên vai trò của người dùng trong tổ chức",
    options: [
      "RBAC cho phép người tạo ra đối tượng có thể cấp quyền truy nhập cho người dùng khác",
      "RBAC là cơ chế điều khiển truy nhập được sử dụng rộng rãi nhất",
      "RBAC cấp quyền truy nhập dựa trên vai trò của người dùng trong tổ chức",
      "RBAC cấp quyền truy nhập dựa trên tính nhạy cảm của thông tin và chính sách quản trị",
      
    ]
},
{
    numb: 109,
    question: "Phát biểu nào sau đây đúng với cơ chế điều khiển truy nhập DAC ?",
    answer: "DAC cho phép người tạo ra đối tượng có thể cấp quyền truy nhập cho người dùng khác",
    options: [
      "DAC cho phép người tạo ra đối tượng có thể cấp quyền truy nhập cho người dùng khác",
      "DAC cấp quyền truy nhập dựa trên tính nhạy cảm của thông tin và chính sách quản trị",
      "DAC là cơ chế điều khiển truy nhập được sử dụng rộng rãi nhất",
      "DAC quản lý quyền truy nhập chặt chẽ hơn các cơ chế khác",
      
    ]
},
{
    numb: 110,
    question: "Đâu là một công cụ có khả năng rà quét các lỗ hổng chèn mã SQL cho các trang web ?",
    answer: "nmap",
    options: [
      "nmap",
      "Microsoft Baseline Security Analyzer",
      "Nessus vulnerability scanner",
      "Acunetix Web Vulnerability Scanner",
      
    ]
},
{
    numb: 111,
    question: "Danh sách điều khiển truy nhập ACL thực hiện việc quản lý quyền truy nhập đến các đối tượng cho người dùng bằng cách",
    answer: "Mỗi đối tượng được gán một danh sách người dùng kèm theo quyền truy nhập",
    options: [
      "Các quyền truy nhập vào đối tượng cho mỗi người dùng được quản lý trong một ma trận",
      "Các quyền truy nhập vào đối tượng cho mỗi người dùng được quản lý riêng rẽ",
      "Mỗi người dùng được gán một danh sách các đối tượng kèm theo quyền truy nhập",
      "Mỗi đối tượng được gán một danh sách người dùng kèm theo quyền truy nhập",
      
    ]
},
{
    numb: 112,
    question: "Tường lửa không thể chống lại...",
    answer: "Các hiểm họa từ bên trong",
    options: [
      "Các hiểm họa từ bên trong",
      "Các hiểm họa từ bên ngoài",
      "Tấn công giả mạo địa chỉ",
      "Tấn công từ mạng Internet",
      
    ]
},
{
    numb: 113,
    question: "Sự khác biệt chính giữa hệ thống ngăn chặn xâm nhập (IPS) và hệ thống phát hiện xâm nhập (IDS) là:",
    answer: "IPS có khả năng chủ động ngăn chặn xâm nhập",
    options: [
      "IPS phát hiện xâm nhập hiệu quả hơn",
      "IPS có khả năng chủ động ngăn chặn xâm nhập",
      "IDS phát hiện xâm nhập hiệu quả hơn",
      "IDS có khả năng chủ động ngăn chặn xâm nhập",
      
    ]
},
{
    numb: 114,
    question: "Tường lửa lọc gói có thể lọc các thông tin nào trong gói tin?",
    answer: "Chỉ các thông tin trong header của gói tin",
    options: [
      "Chỉ các thông tin trong header của gói tin",
      "Chỉ các thông tin trong payload của gói tin",
      "Chỉ lọc địa chỉ IP trong gói tin",
      "Cả thông tin trong header và payload của gói tin",
      
    ]
},
{
    numb: 115,
    question: "Không nên sử dụng nhiều hơn 1 phần mềm quét virus chạy ở chế độ quét theo thời gian thực trên một máy tính vì",
    answer: "Các phần mềm quét virus xung đột với nhau",
    options: [
      "Các phần mềm quét virus xung đột với nhau",
      "Các phần mềm quét virus không thể hoạt động",
      "Các phần mềm quét virus chiếm nhiều tài nguyên",
      "Các phần mềm quét virus tấn công lẫn nhau",
      
    ]
},
{
    numb: 116,
    question: "Phát biểu nào sau đây đúng với cơ chế điều khiển truy nhập bắt buộc MAC ?",
    answer: "MAC cấp quyền truy nhập dựa trên tính nhạy cảm của thông tin và chính sách quản trị",
    options: [
      "MAC cho phép người tạo ra đối tượng có thể cấp quyền truy nhập cho người dùng khác",
      "MAC quản lý quyền truy nhập chặt chẽ hơn các cơ chế khác",
      "MAC cấp quyền truy nhập dựa trên tính nhạy cảm của thông tin và chính sách quản trị",
      "MAC là cơ chế điều khiển truy nhập được sử dụng rộng rãi nhất",
      
    ]
},
{
    numb: 117,
    question: "Đâu là một loại tường lửa?",
    answer: "Application-level gateway",
    options: [
      "Server gateway",
      "Application server",
      "Application-level gateway",
      "Gateway server",
      
    ]
},
{
    numb: 118,
    question: ". Ví điện tử Paypal là một dạng...",
    answer: "Thẻ bài (token)",
    options: [
      "Khóa mã (encrypted key)",
      "The ATM",
      "Thẻ bài (token)",
      "Thẻ thông minh (smart card)",
      
    ]
},
{
    numb: 119,
    question: "Dạng xác thực sử dụng các thông tin nào dưới đây đảm bảo độ an toàn cao hơn?",
    answer: "Tên truy nhập và mật khẩu",
    options: [
      "Thẻ ATM và tên truy nhập",
      "Tên truy nhập và số PIN",
      "Thẻ ATM và số PIN",
      "Tên truy nhập và mật khẩu",
      
    ]
},
{
    numb: 120,
    question: "Một trong các dạng khóa mã (encrypted keys) được sử dụng rộng rãi trong điều khiển truy nhập là ?",
    answer: "Chứng chỉ số khóa công khai",
    options: [
      "E-token",
      "Chứng chỉ số khóa công khai",
      "The ATM",
      "Mobile-token",
      
    ]
},
{
    numb: 121,
    question: "Tại sao một hệ thống phát hiện xâm nhập dựa trên chữ ký không thể phát hiện các tấn công, xâm nhập mới?",
    answer: "Do chữ ký của chúng chưa tồn tại trong hệ thống",
    options: [
      "Do chữ ký của chúng chưa tồn tại trong hệ thống",
      "Do các tấn công, xâm nhập mới không có chữ ký",
      "Do các tấn công, xâm nhập mới không gây ra bất thường",
      "Do các tấn công, xâm nhập mới chỉ gây thiệt hại nhỏ",
      
    ]
},
{
    numb: 122,
    question: "Ưu điểm của thẻ bài (token) so với thẻ thông minh (smart card) trong điều khiển truy nhập là:",
    answer: "Có cơ chế xác thực mạnh hơn",
    options: [
      "Có cơ chế xác thực mạnh hơn",
      "Có cơ chế xác thực đa dạng hơn",
      "Được sử dụng rộng rãi hơn",
      "Có chi phí rẻ hơn",
      
    ]
},
{
    numb: 123,
    question: "Phương pháp xác thực nào dưới đây có thể cung cấp khả năng xác thực có độ an toàn cao nhất?",
    answer: "Sử dụng vân tay",
    options: [
      "Sử dụng Smartcard",
      "Sử dụng vân tay",
      "Sử dụng chứng chỉ số",
      "Sử dụng mật khẩu",
      
    ]
},
{
    numb: 124,
    question: "Đâu là các tính năng của kiểm soát truy nhập sử dụng tường lửa?",
    answer: "Kiểm soát dịch vụ và hướng",
    options: [
      "Kiểm soát dịch vụ và các phần mềm",
      "Kiểm soát người dùng và tin tặc",
      "Kiểm soát dịch vụ và hướng",
      "Kiểm soát virus và các malware khác",
      
    ]
},
{
    numb: 125,
    question: "Ba cơ chế điều khiển truy nhập thông dụng gồm:",
    answer: "DAC, MAC và RBAC",
    options: [
      "DAC, MAC và RRAC",
      "DAC, BAC và RBAC",
      "DAC, MAC và BAC",
      "DAC, MAC và RBAC",
      
    ]
},
{
    numb: 126,
    question: "Mục đích chính của điều khiển truy nhập là để đảm bảo các thuộc tính an ninh của thông tin, hệ thống và các tài nguyên, gồm:",
    answer: "Tính bí mật, tính toàn vẹn và tính sẵn dùng",
    options: [
      "Tính bảo mật, tính toàn vẹn và tính xác thực",
      "Tính bí mật, tính toàn vẹn và tính xác thực",
      "Tính bảo mật, tính toàn vẹn và tính sẵn dùng",
      "Tính bí mật, tính toàn vẹn và tính sẵn dùng",
      
    ]
},
{
    numb: 127,
    question: "Số lượng nhân tố (factor) xác thực sử dụng trong điều khiển truy nhập dựa trên thẻ thông minh là:",
    answer: "2",
    options: [
      "1",
      "3",
      "2",
      "4",
      
    ]
},
{
    numb: 128,
    question: "Một nhiệm vụ chính của các hệ thống IDS/IPS là:",
    answer: "Giám sát lưu lượng mạng hoặc các hành vi trên một hệ thống để nhận dạng các dấu hiệu của tấn công, xâm nhập",
    options: [
      "Truy tìm và tấn công ngược lại hệ thống của tin tặc",
      "Giám sát lưu lượng mạng hoặc các hành vi trên một hệ thống để nhận dạng các dấu hiệu của tấn công, xâm nhập",
      "Giám sát lưu lượng mạng nhận dạng các dấu hiệu của tấn công, xâm nhập",
      "Giám sát các hành vi trên một hệ thống để nhận dạng các dấu hiệu của tấn công, xâm nhập",
      
    ]
},
{
    numb: 129,
    question: "Hai dịch vụ quan trọng nhất của một hệ thống điều khiển truy nhập là:",
    answer: "Authentication và Authorization",
    options: [
      "Authentication và Authorization",
      "Authenticator và Administrator",
      "Administrator và Authorization",
      "Authentication và Administrator",
      
    ]
},
{
    numb: 130,
    question: "Tìm phát biểu đúng về phát hiện xâm nhập dựa trên chữ ký và phát hiện xâm nhập dựa trên bất thường",
    answer: "Phát hiện xâm nhập dựa trên chữ ký thường có tỷ lệ phát hiện đúng cao hơn",
    options: [
      "Phát hiện xâm nhập dựa trên chữ ký thường có tỷ lệ phát hiện đúng cao hơn",
      "Tính bảo mật, tính toàn vẹn và tính xác thực",
      "Tính bảo mật, tính toàn vẹn và tính sẵn dùng",
      "Tính bí mật, tính toàn vẹn và tính sẵn dùng",

    ]
},
{
    numb: 131,
    question: "Tìm phát biểu đúng về dịch vụ xác thực trong điều khiển truy nhập",
    answer: "Là quá trình xác minh tính chân thực của thông tin nhận dạng người dùng cung cấp",
    options: [
      "Là quá trình xác minh tính chân thực của thông tin nhận dạng người dùng cung cấp",
      "Là quá trình xác minh nhận dạng của chủ thể",
      "Là quá trình xác minh các thông tin nhận dạng của chủ thể yêu cầu truy nhập đối tượng",
      "Là quá trình xác minh nhận dạng của người dùng",
      
    ]
},
{
    numb: 132,
    question: "Loại tấn công nào sau đây chiếm quyền truy nhập đến tài nguyên lợi dụng cơ chế điều khiển truy nhập DAC?",
    answer: "Trojan horse",
    options: [
      "Spoofing",
      "Trojan horse",
      "Man in the middle",
      "Phishing",
      
    ]
},
{
    numb: 133,
    question: "Đâu là tên viết đúng của Hệ thống phát hiện đột nhập/xâm nhập?",
    answer: "Instruction Detection System",
    options: [
      "Intrusion Detector System",
      "Intrusion Detecting System",
      "Intrusion Detection System",
      "Instruction Detection System",
      
    ]
},
{
    numb: 134,
    question: "Một trong các nhược điểm chính của điều khiển truy nhập dựa trên các đặc điểm sinh trắc học là:",
    answer: "Chi phí đắt",
    options: [
      "Không được hỗ trợ rộng rãi",
      "Chi phí đắt",
      "Khó sử dụng",
      "Công nghệ phức tạp",
      
    ]
},
{
    numb: 135,
    question: "Ưu điểm của mật khẩu một lần (OTP-One Time Password) so với mật khẩu truyền thống là",
    answer: "Chống được tấn công phát lại",
    options: [
      "Chống được tấn công từ điển",
      "Chống được tấn công vét cạn",
      "Chống được tấn công phá mã",
      "Chống được tấn công phát lại",
      
    ]
},
{
    numb: 136,
    question: "Kỹ thuật tấn công SYN Floods khai thác điểm yếu trong khâu nào trong bộ giao thức TCP/IP?",
    answer: "Bắt tay 3 bước",
    options: [
      "Bắt tay 3 bước",
      "Bắt tay 2 bước",
      "Xác thực người dùng",
      "Truyền dữ liệu",
      
    ]
},

];

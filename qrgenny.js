            /* JS comes here */
			var qr;
			(function() {
                    qr = new QRious({
                    element: document.getElementById('qr-code'),
                    size: 200,
                    value: 'https://surflia.com'
                });
            })();
            
            document.querySelector('form').onsubmit = function generateQRCode(){
                const firstName = document.getElementById('inputFirstName').value
                const lastName = document.getElementById('inputLastName').value
                const cell = document.getElementById('Cell').value
            
                let vcard = `BEGIN:VCARD
                VERSION:4.0
                N:${lastName};${firstName};;Mr.;
                FN:Sheri Nom
                ORG:Sheri Nom Co.
                TITLE:Ultimate Warrior
                PHOTO;MEDIATYPE#image/gif:http://www.sherinnom.com/dir_photos/my_photo.gif
                TEL;TYPE#work,voice;VALUE#uri:tel:${cell}
                TEL;TYPE#home,voice;VALUE#uri:tel:+1-404-555-1212
                ADR;TYPE#WORK;PREF#1;LABEL#"Normality\nBaytown\, LA 50514\nUnited States of America":;;100 Waters Edge;Baytown;LA;50514;United States of America
                ADR;TYPE#HOME;LABEL#"42 Plantation St.\nBaytown\, LA 30314\nUnited States of America":;;42 Plantation St.;Baytown;LA;30314;United States of America
                EMAIL:sherinnom@example.com
                REV:20080424T195243Z
                x-qq:21588891
                END:VCARD`

                var qrtext = vcard
                qr.set({
                        foreground: 'black',
                        level: "Q",
                        size: 500,
                        value: qrtext
                      });
            
                console.log([firstName, lastName, cell])
                console.log(vcard)
                

                
                
                
                return false;
            };
            
            
			
           
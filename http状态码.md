### http常用状态码

 **类别**                               **原因短语**               
 1XX   Informational(信息状态码)        接收的请求正在处理         
 2XX   Successs(成功状态码)             请求正常处理完毕           
 3XX   Redirection(重定向状态码)        需要进行附加操作以完成请求 
 4XX   Client Error(客户端错误状态码)    服务器无法处理请求         
 5XX   Server Error(服务器错误状态码)    服务器处理请求出错         

 **状态码  含义**                                                    
 200     OK：服务器成功处理了请求；                                   
 301     请求永久定向；                                               
 302     请求临时定向                                                 
 304     Not Modified：服务端的资源与客户端上一次请求的一致，不需要重新传输，客户端使用本地缓存的即可； 
 307     Temporary Redirect（临时重定向）                             
 306     在这种情况下，请求应该与另一个URI重复，但后续的请求应仍使用原始的URI。 与302相反，当重新发出原始请求时，不允许更改请求方法。 例如，应该使 用另一个POST请求来重复POST请求 
 400     Bad Request：用于告诉客户端它发送了一个错误的请求；         
 401     unauthorized：客户端请求没有经过授权                         
 403     forbidden：客户端请求被服务器拒绝，一般客户端没有访问权限    
 404     Not Found：页面丢失/未找到资源；                             
 500     Internal Server Error：服务器内部出现了错误；                
 501     Internal Server Error服务器遇到一个错误，使其无法对请求提供服务； 
 502     服务器暂不可用，有时是为了防止系统过载                       
 503     server unavailable：服务器发生临时错误；                     
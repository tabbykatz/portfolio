---
title: "(What Happens When) You Enter a Web Address Into a Browser?"
date: "2020-08-23"
og:
  description: "A technical blog entry for Holberton."
  image: "/browser.png"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_What happens in those seconds between Enter and a loaded page?_


It's commonplace. We type a web address into the browser and hit Enter. With modern internet connections the page loads almost instantaneously. We're at the site we wanted, reading or shopping, and don't give the inner workings a second thought. But if you aim for a career in tech you need to know how to answer this common question: What happens when you type an address in your browser and press Enter?


First, your browser is a client in the client-server model.

>The client-server model describes how a server provides resources and services
>to one or more clients. Examples of servers include web servers, mail servers,
	>and file servers. Each of these servers provide resources to client
	>devices, such as desktop computers, laptops, tablets, and smartphones.
	>Most servers have a one-to-many relationship with clients, meaning a
	>single server can provide resources to multiple clients at one time. -https://techterms.com/definition/client-server_model


You're the user, the tool you're using to request information is the client. The requests are answered by the server. There are many steps in this process.

# DNS

The Domain Name System (DNS) is the largest distributed database in the world and has been an essential component of the functionality of the Internet since 1985. It is used to translate web addresses to the respective IP addresses (we'll get to those later). Computers have no trouble with numbers, but humans are more likely to remember words such as "Google.com". DNS helps connect the two, and it does much more along the way.


A DNS request is often the first step when you hit that Enter button. I say "often" because the browser will check it's own stored information (cache) and as the operating system (OS) to do the same before a DNS request is formally made. If that fails, a resolver is needed. Your resolver server is usually your Internet Service Provider (ISP). The OS requests the resolver and asks for the IP associated with the web address you've entered. At this time, the resolver checks it's own cache just in case it already has the information handy. If it doesn't, it will ask the root server.


The root server will direct the resolver to the .COM Top-level Domain (TLD) server. We need the .COM TLD server if the URL (Uniform Resource Locator) you enter ends in ".com". As you can guess, there are many other possible TLD servers. The IP we need is still a few steps away, though, because the TLD only directs the resolver to the Authoritative Name Servers (ANS) associated with your URL. These are given to the TLD system when the domain is first created and just for this purpose.


Any ANS that answers the resolver has the IP because it holds the "A Records" for the domain: in this case our address is linked to the IP "34.234.197.104". Before we move on, it's important to note that as part of the process the resolver records and holds onto the information it gathers to save time in the future. What a beautiful system!


# What's an IP?

I've mentioned Internet Protocol addresses but haven't explained what they are. Above, we followed a resolver as it searched for the address that matched the URL you entered. Why?


>An Internet Protocol address (IP address) is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. An IP address serves two main functions: host or network interface identification and location addressing. –https://en.wikipedia.org/wiki/IP_address


Not only does the server for the site you're trying to reach have an IP address, you have one too. Yours can change depending on how you connect to the internet, but it's there to identify you so that your interactions online can be understood and interpreted with a set of protocols, Internet Protocols.


An IP address is very much a sequence of numbers, such as 34.234.197.104 in IPv4, and 2001:db8:0:1234:0:567:8:1 in IPv6. (We need more numbers now, so we're getting a larger set with IPv6). The complex mapping system used for IP addresses is, well, complex.

![https://xkcd.com/195/](/xkcd-195.jpg)
_https://xkcd.com/195/_


IP is not the only type of protocol used on the Internet. The Internet Protocol Suite is often referred to as TCP/IP (Transmission Control Protocol), and it also contains other types of protocols. TCP/IP is a set of rules that control how servers and clients interact over a network and how data is transferred, broken into packets, and received.


The resolver heads back to your browser with the IP address, but the process is far from over.

# Firewalls

Servers are often equipped with one or more firewalls to protect themselves from malicious attacks. A firewall is software that allows the owner to set rules about what information can enter or leave any part of a network. When your browser asks for the site at 34.234.197.104, your request is processed by a firewall which decides if you are a threat to the security of the server. Even your own browser can have a firewall to protect your system from malicious IPs.

# HTTPS/SSL

When we type out web addresses, we often leave off an important bit.


HTTPS stands for HyperText Transfer Protocol Secure, and is a more secure version of HTTP. This transfer protocol defines different types of requests and responses served to clients and servers over a network. This protocol defines how servers and clients make and fulfill requests. HTTP and HTTPS requests include GET, POST, and PUT. The HTTPS traffic is encrypted to ensure users that their data can't be stolen or seen by third parties. We take advantage of this whenever we shop online or file taxes with TurboTax.


Now let's talk about the SSL certificate. SSL stands for Secure Sockets Layer (also known as TSL, Transport Layer Security). This certificate is issued and managed by trusted Certificate Authorities such as Let's Encrypt. Public and private key pairs are issued and configured by the owner, and they are compared in a "handshake" every time a client requests access. If they don't match, that request is revoked. On Firefox and other browsers you can check for secure connections in the address bar, and it is often represented by a small lock icon.

# Multiple Servers need a Load Balancer

We still haven't loaded the web page in our browser. When the request was checked for security, it hit the first Firewall as well, and it's likely that Firewall was protecting a server type called a Load Balancer. Load balancing is the process of distributing network traffic across multiple servers. The Load Balancing server doesn't contain the data used to render the webpage. Instead, it directs traffic to a number of servers that do. A Load Balancing Server handles traffic so that downtime can be minimized in the event of maintenance or failure on the part of one of the servers. It's often where the SSL handshake ends, but there can still be Firewalls ahead.

# Web Servers & Application Servers

We're almost there! Here are the servers, often behind more firewalls, that contain everything you need to render a the webpage. There can be many; they are usually carbon copies of one another for redundancy. Each server has an operating system (Let's say Linux), Web Server software (Let's say Apache), a database (Let's say MySQL) , Application Server software or scripting for the codebase (Let's say Python). I chose those options because they make up the LAMP stack, but other combinations working together or "stacks" are used as well.


Of my example stack, I'll explain a few:


- A web server is a software program that serves static content, like simple HTML pages, images, and plain text files.
- An application server is a software program responsible for operating applications and communicating with the databases to serve dynamic content based on the request the client makes.
- The database is a collection of data, and the Data Base Management System (DBMS) is the program that interacts with the database to retrieve, add, and modify data.

# Finally, the web page

Your requests and the subsequent responses travel around in complicated pathways until you've made it to the server. The web server software serves the static content, and if you log in or enter more information the application server works with the database to create dynamic content for you to view and interact with. This is how a a website works.


Everyday interactions on the internet don't require you to know or understand any of this. But it is becoming increasingly more likely for "regular folk" to make their own websites or online shops, and a basic understanding of the inner workings can be helpful.

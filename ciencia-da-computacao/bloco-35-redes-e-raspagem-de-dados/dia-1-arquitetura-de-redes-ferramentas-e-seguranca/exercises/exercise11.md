# ip interno

(.ambient_dia_1) ➜  exercises git:(exercicios/bloco35) ✗ ip a        
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 7c:8a:e1:d8:44:31 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.99/24 brd 192.168.1.255 scope global dynamic noprefixroute enp3s0
       valid_lft 2785sec preferred_lft 2785sec
    inet6 2804:d41:a1e9:e00:c089:4526:faec:d04c/64 scope global temporary dynamic 
       valid_lft 3135sec preferred_lft 3135sec
    inet6 2804:d41:a1e9:e00:d13d:730:f8f8:364d/64 scope global dynamic mngtmpaddr noprefixroute 
       valid_lft 3135sec preferred_lft 3135sec
    inet6 fe80::f323:29da:74cd:2ad8/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever


# ip externo

(.ambient_dia_1) ➜  exercises git:(exercicios/bloco35) ✗ wget -qO- http://ipecho.net/plain
187.14.100.178%
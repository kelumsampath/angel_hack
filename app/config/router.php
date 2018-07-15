<?php

$router = $di->getRouter();

$router->setDefaults(['controller' => 'payment', 'action' => 'index']);

// Define your routes here
$router->add('/user/register', ['controller' => 'signup', 'action' => 'index']);
$router->add('/user/login', ['controller' => 'login', 'action' => 'index']);
$router->add('/form', ['controller' => 'form', 'action' => 'loanreg']);
$router->add('/payment', ['controller' => 'payment', 'action' => 'index']);
$router->add('/user/get', ['controller' => 'dashboard', 'action' => 'index']);
$router->add('/user/getdetails', ['controller' => 'dashboard', 'action' => 'details']);
$router->add('/user/getdetails2', ['controller' => 'dashboard', 'action' => 'getborowdetails']);
$router->add('/pay', ['controller' => 'pay', 'action' => 'index']);

$router->handle();

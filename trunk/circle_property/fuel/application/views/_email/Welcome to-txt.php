Welcome to <?php echo $site_name; ?>,

Thanks for joining <?php echo $site_name; ?>. We listed your sign in details below. Make sure you keep them safe.
Follow this link to login on the site:

<?php if (strlen($username) > 0) { ?>

Your username: <?php echo $username; ?>
<?php } ?>

Your email address: <?php echo $email; ?>

Your generated password: <?php echo $password ?>

<?php /* Your password: <?php echo $password; ?>

*/ ?>

Have fun!
The <?php echo $site_name; ?> Team
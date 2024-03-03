package com.sibermatica;

import javax.swing.JOptionPane;

public class Commander {

    public static void main(String[] args) {
        for (int i = 0; i < args.length; i++) {
            execute(args[i]);
        }
    }

    public static void execute(String command) {
        if (command.equalsIgnoreCase("abrir notepad")) {
            ProcessBuilder pb = new ProcessBuilder("notepad.exe");

            try {
                pb.start();
            } catch (Exception e) {
                e.printStackTrace();
                JOptionPane.showMessageDialog(null, "Alguien intentó abrir el bloc de notas pero no se pudo: F",
                        "Error!", JOptionPane.ERROR_MESSAGE);
            }

        }
    }

}